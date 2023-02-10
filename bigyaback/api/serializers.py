from rest_framework import serializers
from .models import User

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
    email=serializers.EmailField()
    otp=serializers.CharField()