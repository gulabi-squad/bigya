from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.
from .emails import *
from .serializers import *

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
                email=serializer.data['email']
                otp=serializer.data['otp']
                user=User.objects.filter(email=email)
                if not user.exists():
                    return Response({
                        'status':400,
                        'message':'something went wrong',
                        'data':serializer.errors
                    })

                if user[0].otp!=otp:
                    return Response({
                        'status':400,
                        'message':'something went wrong',
                        'data':'incorrect otp'
                    })
                user=user.first()
                user.is_email_verified=True
                user.save()
                return Response({
                    'status':400,
                    'message':'account verified',
                    'data':{}
                })
                    
            return Response('hahaha')

            

        except Exception as e:
            return Response('haha')
            




