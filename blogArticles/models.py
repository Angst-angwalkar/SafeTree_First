from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model

User = get_user_model()

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

