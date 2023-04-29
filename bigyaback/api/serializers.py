from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    passwordconfirm = serializers.CharField(style={'input_type':'password'}, write_only=True)
    class Meta:
        model=User
        fields=['last_name','first_name','email','password','passwordconfirm','is_email_verified']

    def validate(self, attrs):
        if attrs['password'] != attrs['passwordconfirm']:
            raise serializers.ValidationError('Password and confirm password doesnot match')
        return attrs
    def create(self, validate_data):
        return User.objects.create_user(**validate_data)

class VerifyAccountSerializer(serializers.Serializer):
    otp=serializers.CharField()

class UserLoginSerializer(serializers.ModelSerializer):
  email = serializers.EmailField(max_length=255)
  class Meta:
    model = User
    fields = ['email', 'password']
class ExpertProfileSerializer(serializers.ModelSerializer):
    expert_image=serializers.ImageField(use_url=True)
    class Meta:
        model=ExpertProfile
        fields=['name','description','category','expert_image','rating']