from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
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
    
    def get(self,request):
       experts=ExpertProfile.objects.all()
       print(experts)
       serializer=ExpertProfileSerializer(experts,many=True)
       return Response(serializer.data)
       

class RatingView(APIView):
   def post(self,request,pk):
      expert_id = UUID(pk)
      data=request.data
      expert=ExpertProfile.objects.get(id=expert_id)
      rating=data['ratingofex']
      print(rating)
      print(data)
      print(expert.id)
      print(expert.name)
      userid=data['user']['user_id']
      user=User.objects.get(id=userid)
      print(user.email)
      try:
         ratingfilter=Rating.objects.get(user=user,expert=expert)
         prevrating=ratingfilter.rating
         prevavgrating=expert.ratingofex

         ratingfilter.rating=rating
         ratingfilter.save()
         expert.ratingofex=math.ceil((prevavgrating*2-prevrating+ratingfilter.rating)/2)
         expert.save()
         return Response('rating saved')
      
      except Rating.DoesNotExist:
         Rating.objects.create(expert=expert,user=user,rating=rating)
         if expert.ratingofex is None:
            expert.ratingofex=rating
            expert.save()
         else:
            expert.ratingofex=math.ceil((expert.ratingofex+rating)/2)
            expert.save()


         return Response("rating saved")
         

class Clientrequest(APIView):
   authentication_classes = [JWTAuthentication]
   permission_classes = [IsAuthenticated]
   def post(self,request):
      data=request.data
      print(data)
      serializer=WorkSerializer(data=data)
      if serializer.is_valid():
         serializer.save()
         return Response({
            "status":200,
            "message":"Hire Request sent",
            "data":{}
         })
      return Response({
         "status":400,
         "message":"Bad input",
         "data":serializer.errors
      })
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

            




