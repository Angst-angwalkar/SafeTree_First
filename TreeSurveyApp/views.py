from django.http.response import HttpResponse
from django.shortcuts import render
from django.db.models import lookups, QuerySet
from rest_framework.response import Response
from rest_framework import permissions, serializers, status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.generics import ListAPIView, GenericAPIView, RetrieveAPIView
from rest_framework.views import APIView
from .models import TreeModel, TreeSurveyModel
from rest_framework.renderers import JSONRenderer
from .serializers import TreeModelSerializer, TreeSurveySerializer

class TreeSurveyView(ListAPIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        # user = request.headers['Authorization']
        treeData = TreeSurveyModel.objects.all()
        treeData_id = treeData.filter(areaName="Vasai")
        serializer = TreeSurveySerializer(data=treeData, many=True)
        print(serializer.data)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)


    def post(self, request, format=None):
        up_file = request.data['treeImage']
        path = "./media/photos/"
        destination = open(path+up_file.name, 'wb+')
        print(request.data)
        print("This is the placeholder")
        for chunk in up_file.chunks():
            destination.write(chunk)
            destination.close()
        request.data['treeImage'] = path+up_file.name
        print(request.data['treeImage'])
        serializer = TreeSurveySerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

# class TreeDataView(APIView):
#     parser_classes = (MultiPartParser, FormParser)

#     def get(self, request, *args, **kwargs):
#         treeData = TreeModel.objects.all()
#         serializer = TreeModelSerializer(treeData, many=True)
#         return Response(serializer.data)


#     def post(self, request, *args, **kwargs):
#         tree_serializer = TreeModelSerializer(data=request.data)
#         if tree_serializer.is_valid():
#             tree_serializer.save()
#             return Response(tree_serializer.data, status=status.HTTP_201_CREATED)
#         else:
#             print('error', tree_serializer.errors)
#             return Response(tree_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


class TreeDataView(APIView):
    permission_classes = [permissions.AllowAny]
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        posts = TreeModel.objects.all()
        serializer = TreeModelSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        tree_serializer = TreeModelSerializer(data=request.data)
        if tree_serializer.is_valid():
            tree_serializer.save()
            return Response(tree_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', tree_serializer.errors)
            return Response(tree_serializer.errors, status=status.HTTP_400_BAD_REQUEST)