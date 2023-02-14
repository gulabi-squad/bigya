

from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('signin/', views.Signin),

    path('signup/',views.Signup),
    # path('dash/',views.Dashboard)
]
   
