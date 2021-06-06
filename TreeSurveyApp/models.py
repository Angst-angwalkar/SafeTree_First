from django.db import models
from datetime import datetime


class TreeSurveyModel(models.Model):
    areaName = models.CharField(max_length=20)
    treeName = models.CharField(max_length=30)
    treeAge = models.CharField(max_length=30)
    treeImage = models.CharField(max_length=2000)
    treeHealth = models.CharField(max_length=100)
    treeGirth = models.CharField(max_length=10)
    treeHeight = models.CharField(max_length=10)
    treeLocation = models.CharField(max_length=100)
    surveyDate = models.DateTimeField(default=datetime.now, blank=True)
    
    def __str__(self):
        return str(self.areaName)


    
class TreeModel(models.Model):
    areaName = models.CharField(max_length=20)
    treeName = models.CharField(max_length=30)
    treeAge = models.CharField(max_length=30)
    treeImage = models.ImageField(upload_to="./media/photos/")
    treeHealth = models.CharField(max_length=100)
    treeGirth = models.CharField(max_length=10)
    treeHeight = models.CharField(max_length=10)
    treeLocation = models.CharField(max_length=100)
    surveyDate = models.DateTimeField(auto_now_add=True, blank=True)
    
    def __str__(self):
        return str(self.areaName)