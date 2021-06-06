from django.db import models
from rest_framework import fields, serializers
from django.contrib.auth import get_user_model

from rest_framework.serializers import ModelSerializer
from .models import TreeSurveyModel, TreeModel


class TreeSurveySerializer(ModelSerializer):
    class Meta():
        model = TreeSurveyModel
        fields = ("areaName","treeName","treeAge","treeImage","treeHealth","treeGirth","treeHeight","treeLocation","surveyDate")



class TreeModelSerializer(ModelSerializer):
    class Meta:
        model = TreeModel
        fields = ("areaName","treeName","treeAge","treeImage","treeHealth","treeGirth","treeHeight","treeLocation","surveyDate")
