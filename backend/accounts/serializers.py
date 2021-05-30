from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model

from rest_framework.serializers import ModelSerializer
from .models import UserProfile
User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'password')



class UserProfileSerializer(ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('phone','address','city','country','postal_code',)
