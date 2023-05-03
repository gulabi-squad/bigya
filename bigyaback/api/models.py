from django.db import models
from django.contrib.auth.models import AbstractUser
from .manager import *
import uuid

class User(AbstractUser):
    username=None
    first_name=models.CharField(max_length=20,blank=True,null=True)
    last_name=models.CharField(max_length=20,blank=True,null=True)

    email=models.EmailField(unique=True)
    phone_no=models.CharField(max_length=20)
    is_email_verified=models.BooleanField(default=False)
    otp=models.CharField(max_length=6,null=True,blank=True)
    objects=UserManager()

    USERNAME_FIELD='email'
    REQUIRED_FIELDS=[]





# Create your models here.

class ExpertProfile(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)

    name=models.CharField(max_length=20)
    expert_image=models.ImageField(upload_to='expertprofile',blank=True)
    description=models.TextField(max_length=500)
    category = models.CharField(max_length=40)
    ratingofex=models.IntegerField(blank=True,null=True)
    
    def __str__(self):
        return self.name

class Workdetails(models.Model):
    description=models.TextField(max_length=1000,blank=False)
    date=models.DateTimeField(auto_now=False)
    contact=models.CharField(max_length=10)
    address=models.CharField(max_length=100)



class Rating(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    expert=models.ForeignKey(ExpertProfile,on_delete=models.CASCADE)
    rating=models.IntegerField(blank=True,null=True)

    def __str__(self):
        return self.expert.name
                               