from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import exceptions
# Create your views here.
from .emails import *
from rest_framework import status
from uuid import UUID
from .serializers import *
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.decorators import login_required
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.core.cache import cache


import math

def get_tokens_for_user(user):
  refresh = RefreshToken.for_user(user)
  return {
      'refresh': str(refresh),
      'access': str(refresh.access_token),
  }

class RegisterAPI(APIView):
    def post(self,request):
        try:
            data=request.data
            serializer=UserSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                send_otp_via_email(serializer.data['email'])
                return Response({
                    'status':200,
                    'message':'registration successfull check email',
                    'data':serializer.data
                })

            return Response({
                    'status':400,
                    'message':'something went wrong',
                    'data':serializer.errors
                })

        except Exception as e:
            print(e)
            return Response('haha')
            

class VerifyOTP(APIView):
    def post(self,request):
        try:
            data=request.data
            serializer=VerifyAccountSerializer(data=data)
            if serializer.is_valid():
                otp=serializer.data['otp']
                user=User.objects.filter(otp=otp,is_email_verified=False)
                if not user.exists():
                    return Response({
                        'status':400,
                        'message':'Otp invalid',
                        'data':serializer.errors
                    })
                user=user.first()
                user.is_email_verified=True
                user.save()
                token=get_tokens_for_user(user)
                return Response({
                    'token':token,
                    'status':200,
                    'message':'account verified',
                    'data':{}
                })

            return Response('Invalid details')
        except Exception as e:
            return Response('An error occured')

class UserLoginView(APIView):
  def post(self, request, format=None):
    serializer = UserLoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    email = serializer.data.get('email')
    password = serializer.data.get('password')
    user = authenticate(email=email, password=password)
    if user is not None:
      print(user.id)
      token = get_tokens_for_user(user)
      return Response({'token':token, 'msg':'Login Success', 'status':200})
    else:
      return Response({'errors':{'non_field_errors':['Email or Password is not Valid']}, 'status':400})





        #     data=request.data
        #     serializer=VerifyAccountSerializer(data=data)
        #     if serializer.is_valid():
        #         email=serializer.data['email']
        #         otp=serializer.data['otp']
        #         user=User.objects.filter(email=email)
        #         if not user.exists():
        #             return Response({
        #                 'status':400,
        #                 'message':'something went wrong',
        #                 'data':serializer.errors
        #             })

        #         if user[0].otp!=otp:
        #             return Response({
        #                 'status':400,
        #                 'message':'something went wrong',
        #                 'data':'incorrect otp'
        #             })
        #         user=user.first()
        #         user.is_email_verified=True
        #         user.save()
        #         return Response({
        #             'status':400,
        #             'message':'account verified',
        #             'data':{}
        #         })
                    
        #     return Response('hahaha')

            

        # except Exception as e:
        #     return Response('haha')


class ExpertProfileView(APIView):   
    def post(self,request):
        cache.delete_pattern('search_results_*')
        try:
         data=request.data
         print(data)
         serializer=ExpertProfileSerializer(data=data)
         if serializer.is_valid():
               serializer.save()
               return Response({
                  'status':200,
                  'message':'expert form has been submitted',
                  'data':{}

               })
         return Response({
               'status':400,
               'message':'Sorry',
               'data':serializer.errors

         })
        except Exception as e:
           return Response({
              'status':400,
              'data':'You have already submitted expert form'
           })
    def get(self,request):
       experts=ExpertProfile.objects.all()
       serializer=ExpertProfileSerializer(experts,many=True)
       return Response({
          'status':200,
          'message':'data from disk',
          'data':serializer.data
       })

class FilteredexpertsView(APIView):
   def get(self,request):
      search_query=request.query_params.get('searchQuery',None)
      cache_key=f'search_results_{search_query}'
      print(search_query)
      cached_results=cache.get(cache_key)
      if cached_results:
         return Response({
            'status':200,
            'message':'data from cache',
            'data':cached_results
         })
      if search_query:
         filteredexperts=ExpertProfile.objects.filter(name__icontains=search_query) or ExpertProfile.objects.filter(category__icontains=search_query)
      serializer=ExpertProfileSerializer(filteredexperts,many=True)
      cache.set(cache_key,serializer.data)

      return Response({
         'status':200,
         'message':'filtered experts',
         'data':serializer.data
      })

       

class RatingView(APIView):
   def post(self,request,pk):
      expert_id = UUID(pk)
      data=request.data
      expert=ExpertProfile.objects.get(id=expert_id)
      rating=data['ratingofex']
      print(f"The rating submitted now is {rating}")
      
      user=request.user
      review=data['review']
      print(user.email)
      try:
         ratingfilter=Rating.objects.get(user=user,expert=expert)
         ratingfilter.review=review


         prevrating=ratingfilter.rating
         print(f"the previous rating by this user is {prevrating}")
         prevavgrating=expert.ratingofex
         print(f"The previous average rating of this user is {prevavgrating}")

         ratingfilter.rating=rating
         ratingfilter.save()
         expert.ratingofex=math.floor((prevavgrating*2-prevrating+ratingfilter.rating)/2)
         print(f"the new rating is {expert.ratingofex}")
         expert.save()
         return Response('rating saved')
      
      except Rating.DoesNotExist:
         Rating.objects.create(expert=expert,user=user,rating=rating,review=review)
         if expert.ratingofex is None:
            expert.ratingofex=rating
            expert.save()
         else:
            expert.ratingofex=math.floor((expert.ratingofex+rating)/2)
            expert.save()


         return Response("rating saved")
      
   def get(self,request,pk):
      expert=ExpertProfile.objects.get(id=pk)
      ratingsofexpert=Rating.objects.filter(expert=expert)
      if not ratingsofexpert.exists():
         return Response({
            'status':400,
            'message':'No ratings and reviews',
            'data':{}

         })

      serializer=RatingSerializer(ratingsofexpert,many=True)
      return Response({
         'status':200,
         'message':"Here are list of ratings and reviews",
         'data':serializer.data
      })

         

class Clientrequest(APIView):
   authentication_classes = [JWTAuthentication]
   permission_classes = [IsAuthenticated]
   def post(self,request):
      data=request.data
      serializer=WorkSerializer(data=data)
      if serializer.is_valid():
         serializer.save()
         return Response({
            "status":200,
            "message":"Hire Request sent",
            "data":serializer.data
         })
      return Response({
         "status":400,
         "message":"Bad input",
         "data":serializer.errors
      })
#    This get function is for expert side 
   def get(self,request):
      expertuser=request.user
      experts=ExpertProfile.objects.get(user=expertuser)
      thatexpert=Workdetails.objects.filter(expert=experts)
      if not thatexpert.exists():
         return Response({
            "status":400,
            "message":"No hirers yet",
            "data":{}

         })
      serializer=WorkSerializer(thatexpert,many=True)
      return Response({
         "status":200,
         "message":"You've got hirers",
         "data":serializer.data

      })
      

class Clientside(APIView):
   def get(self,request):
      user=request.user
      proposals=Workdetails.objects.filter(user=user)
      if not proposals.exists():
         return Response({
            "status":400,
            "message":"No requests yet",
            "data":{}

         })
      serializer=WorkSerializer(proposals,many=True)
      return Response({
         "status":200,
         "message":"List of proposals",
         "data":serializer.data

      })
   
class Responseto(APIView):
   def put(self,request,id):

      try:

         thatwork=Workdetails.objects.get(id=id)
         data=request.data
         status=data['status']
         print(status)
         thatwork.status=status
         thatwork.save()
         return Response({'status':status})
      except thatwork.DoesNotExist:
         return Response({'error':'The work doesnot exist'})

      
   

         
      
         
         
      
    
      
      
      

      
    
      
      
      
    #   serializer=RatingSerializer(data=data,many=True)
    #   if serializer.is_valid():
    #      serializer.save()
    #      return Response({
    #             'status':200,
    #             'message':'expert form has print(user.id)been submitted',
    #             'data':{}

    #         })
    #   return Response({
    #      'status':400,
    #      'message':'Sorry',
    #      'data':serializer.errors

    #     })

class Postforums(APIView):
   def post(self,request):
      try:
         user=request.user
         data=request.data
         contentvalue=data['contentvalue']
         title=data['title']
         Content.objects.create(posted_by=user,contentvalue=contentvalue,title=title)
         return Response({
            'status':200,
            'data':'posted'
         })
      except Exception as e:
         return Response({
            'status':400,
            'data':'post was not saved'
         })
      
   def get(self,request):
      allposts=Content.objects.all()
      serializer=ContentSerializer(allposts,many=True)
      data=serializer.data
      for post_data in data:
         post=Content.objects.get(id=post_data['id'])
         comments=Comments.objects.filter(post=post)
         comment_serializer=CommentSerializer(comments,many=True)
         post_data['comments']=comment_serializer.data
      return Response({
         'status':200,
         'message':'allposts',
         'data':data
      })
   
class Postcomments(APIView):
   def post(self,request):
      try:
         user=request.user
         data=request.data
         comment=data['comment']
         postid=data['postid']
         post=Content.objects.get(id=postid)
         Comments.objects.create(commented_by=user,comment=comment,post=post)
         return Response({
            'status':200,
            'data':'posted'
         })
      except Exception as e:
         return Response({
            'status':400,
            'data':'comment was not saved'
         })
      
   def get(self,request):
      allcomments=Comments.objects.all()
      serializer=CommentSerializer(allcomments,many=True)
      return Response({
         'status':200,
         'message':'allposts',
         'data':serializer.data
      })
   

class FilteredforumsView(APIView):
   def get(self,request):
      search_query=request.query_params.get('searchQuery',None)
      print(search_query)
      if search_query:
         filteredforums=Content.objects.filter(title__icontains=search_query)
      serializer=ContentSerializer(filteredforums,many=True)
      data=serializer.data
      for post_data in data:
         post=Content.objects.get(id=post_data['id'])
         comments=Comments.objects.filter(post=post)
         comment_serializer=CommentSerializer(comments,many=True)
         post_data['comments']=comment_serializer.data
      return Response({
         'status':200,
         'message':'filteredforums',
         'data':data
      })




            




