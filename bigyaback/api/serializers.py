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
    # ratings=RatingSerializer(many=True)
    # weighted_rating=serializers.SerializerMethodField()

    class Meta:
        model=ExpertProfile
        fields=['id','name','description','category','expert_image','ratingofex']
        # def get_weighted_rating(self, obj):
        # # Calculate the weighted average of ratings for this post
        #     weighted_sum = 0
        #     total_weight = 0
        #     rating_counts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0}

        #     for rating in obj.ratings.all():
        #         rating_counts[rating.rating] += 1

        #     for rating, count in rating_counts.items():
        #         weighted_sum += rating * count
        #         total_weight += count

        #     if total_weight > 0:
        #         weighted_rating = weighted_sum / total_weight
        #     else:
        #         weighted_rating = 0
        #     print(weighted_rating)
        #     obj.ratingofex=weighted_rating
        #     obj.save()

        #     return weighted_rating
        


