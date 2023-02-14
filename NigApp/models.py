from django.db import models

# Create your models here.
class User(models.Model):
    username=models.CharField(max_length=100, unique=True,)
    password=models.CharField(max_length=100)
    fname=models.CharField(max_length=100)
    lname=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
