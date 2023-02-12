from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.
from .emails import *
from rest_framework import status
from .serializers import *
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

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
      token = get_tokens_for_user(user)
      return Response({'token':token, 'msg':'Login Success'}, status=status.HTTP_200_OK)
    else:
      return Response({'errors':{'non_field_errors':['Email or Password is not Valid']}}, status=status.HTTP_404_NOT_FOUND)



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
            




