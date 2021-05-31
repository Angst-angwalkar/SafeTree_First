from .models import Category, Post
from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class CategorySerializer(serializers.ModelSerializer):
    # user = models.IntegerField()
    # cat_name = models.CharField(max_length=100)

    class Meta:
        model = Category
        fields = ('user', 'cat_name')


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('user', 'post_category', 'post_title', 'post_desc')
