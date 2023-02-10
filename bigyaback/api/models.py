from django.db import models
from django.contrib.auth.models import AbstractUser
from .manager import *


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
