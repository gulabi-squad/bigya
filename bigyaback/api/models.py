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
    user = models.OneToOneField(User, on_delete=models.CASCADE,default=None,null=True)

    name=models.CharField(max_length=20)
    expert_image=models.ImageField(upload_to='expertprofile',blank=True)
    description=models.TextField(max_length=500)
    category = models.CharField(max_length=40)
    ratingofex=models.IntegerField(blank=True,null=True,default=None)
    qualification=models.CharField(max_length=300,default='No qualifications')
    experience=models.CharField(max_length=300,default='No experiences')
    
    def __str__(self):
        return self.name

class Workdetails(models.Model):
    id = models.AutoField(primary_key=True)
    user=models.ForeignKey(User,on_delete=models.CASCADE,null=True,default=None)
    expert=models.ForeignKey(ExpertProfile,on_delete=models.CASCADE,null=True,default=None)
    description=models.TextField(max_length=1000,blank=False)
    date=models.DateField(auto_now=False)
    time=models.TimeField(default=None,auto_now=False)
    contact=models.CharField(max_length=10)
    location=models.CharField(max_length=100,null=True,default="Nepal")
    status=models.CharField(blank=True,max_length=30,default='pending')



class Rating(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    expert=models.ForeignKey(ExpertProfile,on_delete=models.CASCADE)
    rating=models.IntegerField(blank=True,null=True,default=None)
    review=models.CharField(max_length=600,blank=True)

    def __str__(self):
        return self.expert.name
    

class Content(models.Model):
    id = models.AutoField(primary_key=True)
    posted_by=models.ForeignKey(User,on_delete=models.CASCADE,default=None)
    title=models.CharField(max_length=200)
    contentvalue=models.TextField()
    def __str__(self):
        return str(self.title)

class Comments(models.Model):
    post=models.ForeignKey(Content,on_delete=models.CASCADE)
    comment=models.CharField(max_length=200)
    commented_by=models.ForeignKey(User,on_delete=models.CASCADE)
    
                               