import re
from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework import permissions, status
from rest_framework.permissions import AllowAny
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from .serializers import UserProfileSerializer, UserCreateSerializer
from .models import UserProfile, UserAccount
from accounts import serializers
from django.core.mail import send_mail
from django.http import HttpResponse

# Create your views here.


class Profile(ListAPIView):
    permission_classes = [AllowAny]
    def get(self, request, format=None):
        users= get_user_model().objects.all()
        serializer = UserCreateSerializer()
        print(users)
        return Response(serializer.data)

    def post(self, request, format=None):
        data = self.request.data
        model = UserAccount()
        serializer = UserCreateSerializer()
        if serializer.is_valid(self):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



    def sendSimpleEmail(self, request, format=None):
        data = self.request.data
        print(data)
        res = send_mail(request.data['subject'], request.data['message'], request.data['email'], ['aniket.hooq@gmail.com'])
        return HttpResponse('%s'%res)