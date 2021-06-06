from django.db.models import lookups, QuerySet
from django.http import QueryDict
from rest_framework.response import Response
from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, GenericAPIView, RetrieveAPIView
from .models import BlogPost
from .serializers import BlogPostSerializer
import time
class BlogPostListView(ListAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = BlogPost.objects.order_by('-date_created')
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    

class BlogPostDetailView(RetrieveAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = BlogPost.objects.order_by('-date_created')
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    

class BlogPostFeaturedView(ListAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = BlogPost.objects.all().filter(featured=True)
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    

class BlogPostCategoryView(APIView):
	serializer_class = BlogPostSerializer
	permission_classes = [permissions.AllowAny]
	def post(self, request, format=None):
		print(request.GET)
		print(request.data['id'])
		serializer = BlogPostSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
		
	def get(self, request, format=None):
		posts = BlogPost.objects.all()
		post = None
		if 'Authorization' in request.headers:
			data = request.headers['Authorization'].split('&') #0&2
			print(data)
			if len(data)>1:
				if int(data[0]) == 0:
					#Get Post 1
					print('here')
					post = posts.filter(id=int(data[1]))
				else:
					#GEt post 1 with auth
					post = posts.filter(user=int(data[0]), id=int(data[1]))
			else:
                #Get all posts
				post = posts.filter(user=int(data[0]))
		else:
			post = posts
		serializer = BlogPostSerializer(post, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)

    # def get(self, request, format=None):
    #     data = self.request.data
    #     category = data['title']
    #     serializer = BlogPostSerializer
    #     print(serializer.data)
    #     return Response(serializer.data, status=status.HTTP_200_OK)

    # def post(self, request, format=None):
    #     data = self.request.data
    #     category = data['category']
    #     queryset = BlogPost.objects.order_by('date_created').filter(category__iexact=category)
    #     serializer = BlogPostSerializer(data=data)
    #     if serializer.is_valid():
    #         return Response(serializer.data)
    #     return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    