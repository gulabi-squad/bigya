from rest_framework import serializers
from .models import *
from uuid import UUID

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
    userid=serializers.IntegerField(source='user.id')
    # ratings=RatingSerializer(many=True)
    # weighted_rating=serializers.SerializerMethodField()

    class Meta:
        model=ExpertProfile
        fields=['id','user','userid','name','description','category','expert_image','ratingofex']

    def create(self, validated_data):
        user = User.objects.get(id=validated_data['userid'])
        name = validated_data['name']
        category = validated_data['category']
        expert_image = validated_data['expert_image']
        description = validated_data['description']
        
        return ExpertProfile.objects.create(user=user, name=name,category=category,expert_image=expert_image,description=description)
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
        

class WorkSerializer(serializers.ModelSerializer):
    userid=serializers.IntegerField(write_only=True)
    expertid=serializers.CharField(write_only=True)
    username = serializers.CharField(source='user.first_name', read_only=True)
    expertname = serializers.CharField(source='expert.name', read_only=True)

    class Meta:
        model=Workdetails
        fields=['status','userid','id','username','expertname','user','expert','expertid','date','time','location','contact','description']

    def create(self, validated_data):
        user = User.objects.get(id=validated_data['userid'])
        expert = ExpertProfile.objects.get(id=UUID(validated_data['expertid']))
        date = validated_data['date']
        time = validated_data['time']
        location = validated_data['location']
        contact = validated_data['contact']
        description = validated_data['description']
        
        return Workdetails.objects.create(user=user, expert=expert, date=date,time=time,location=location,contact=contact,description=description)


