from django.db.models import lookups
from rest_framework import serializers
from .models import BlogPost

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ('user','title', 'id' ,'slug', 'category','thumbnail','excerpt','month','day','content','featured')
        # lookup_field = 'slug'