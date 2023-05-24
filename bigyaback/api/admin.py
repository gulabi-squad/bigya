from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

class UserModelAdmin(BaseUserAdmin):
  list_display = ( 'email', 'id','first_name','last_name')
  fieldsets = (
      ('User Credentials', {'fields': ('email', 'password')}),
      ('Personal info', {'fields': ('first_name','last_name', 'is_email_verified','phone_no')}),
      
  )
  # add_fieldsets is not a standard ModelAdmin attribute. UserModelAdmin
  # overrides get_fieldsets to use this attribute when creating a user.
  add_fieldsets = (
      (None, {
          'classes': ('wide',),
          'fields': ('email', 'first_name' ,'last_name','phone_no','password1','password2','is_email_verified'),
      }),
  )
  search_fields = ('email',)
  ordering = ('email', 'id')
  filter_horizontal = ()


admin.site.register(User, UserModelAdmin)
admin.site.register(ExpertProfile)
admin.site.register(Rating)
admin.site.register(Workdetails)
admin.site.register(Comments)
admin.site.register(Content)