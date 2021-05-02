from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from .models import Post, Category
from .serializers import CategorySerializer, PostSerializer



class CategoryView(APIView):
	permission_class = [AllowAny]
	def get(self, request, format=None):
		user_id = request.headers["Authorization"]
		categories = Category.objects.all()
		cat = categories.filter(user=user_id)
		serializer = CategorySerializer(cat, many=True)
		print(serializer.data)
		return Response(serializer.data, status=status.HTTP_200_OK)


	def post(self, request, format=None):
		user = request.data['user']
		serializer = CategorySerializer(data= request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self, request, format=None):
		category = Category.objects.get(user_id = request.headers['Authorization'], id = request.data['cat_id'])
		category.delete()
		return Response({"message":"deleted"}, status=status.HTTP_204_NO_CONTENT)

class PostView(APIView):
	permission_classes = [AllowAny]
	def get(self, request, format=None):
		allposts = Post.objects.all()
		posts = None
		print(request.headers['Category'])
		if request.headers['Category'] == "121212":
			print(request.headers['Category'])
			posts = Post.objects.filter(user=request.headers['Authorization'])
		else:
			posts = Post.objects.filter(user=request.headers['Authorization'], post_category=request.headers['Category'])
		serializer = PostSerializer(posts, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)

	def post(self, request, format=None):
		serializer = PostSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	# def put(self, request, format=None):
	# 	serializer = PostSerializer(data=request.data)
	# 	if serializer.is_valid():
	# 		serializer.save()
	# 		return Response(serializer.data, status=status.HTTP_201_CREATED)
	# 	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	# def put(self, request, format=None):
    #     user = request.data['user']
    #     device = DeviceData.objects.get(user=user)
    #     serializer = DeviceDatasSerializer(device, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status = status.HTTP_202_ACCEPTED)
    #     return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
	
	def delete(self, request, format=None):
		posts = Post.objects.get(user_id = request.headers['Authorization'], id = request.data['post_id'])
		posts.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)




'''
class FileActions(APIView):
	permission_classes = [AllowAny] 
	def get(self, request, format=None):
		user_id = request.headers["Authorization"]
		filez_stream = FilesData.objects.all()
		filez = filez_stream.filter(user_id=user_id)
		serializer = FilezDataSerializer(filez, many=True)
		print(serializer.data)
		return Response(serializer.data, status=status.HTTP_200_OK)

	def post(self, request, format=None):
		if request.data['purge_scheduled'] == 1:
			request.data['purge_scheduled'] = True
		elif request.data['purge_scheduled'] == 0:
			request.data['purge_scheduled'] = False
		serializer = FilezDataSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self, request, format=None):
		filez = FilesData.objects.get(file_id = request.data['file_id'])
		filez.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)
'''