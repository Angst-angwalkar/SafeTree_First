from django.db import models
from django.contrib.auth.models import User, AbstractBaseUser, PermissionsMixin, BaseUserManager


# Create your models here.

'''
Login and Authentication
'''

class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError('Email is Required!')
        
        email = self.normalize_email(email)
        user = self.model(email=email, name=name)

        user.set_password(password)
        user.save()

        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=250, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def get_full_name(self):
        return self.name
    
    def get_short_name(self):
        return self.name
    
    def __str__(self):
        return self.email

class Category(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    cat_name = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return str(self.cat_name)


class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post_category = models.ForeignKey(Category, on_delete=models.CASCADE)
    post_title = models.CharField(max_length=100)
    post_desc = models.TextField(max_length=200)

    def __str__(self):
        return str(self.post_title)

