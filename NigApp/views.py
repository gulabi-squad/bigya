from django.shortcuts import render,HttpResponseRedirect
from .models import *
from django.contrib.auth.models import User
from django.contrib import messages 
from django.shortcuts import redirect
# Create your views here.
def Signin(request):
    
    # obj=User.objects.all() 
    # for i in obj:
    #  print (i)  
    return render(request,'signin.html')

def Signup(request):
    if request.method=="POST":
        fname=request.POST["fname"]
        print(fname)
        lname=request.POST["lname"]
        email=request.POST["email"]
        username=request.POST["username"]
        password=request.POST["password"]
        myuser = User(username=username, email=email, password=password, fname=fname, lname=lname)
        # myuser.first_name= fname
        # myuser.last_name=lname
        myuser.save()
        messages.suceess(request, "Account successfully created")
        HttpResponseRedirect('siginin/')
    #     username=[i.username for i in myuser]
    #     if User.objects.get(username=username).exists:
    #         return render(request,"dash.html")
    # else:
    return render(request, 'signup.html')        
       

        
        
