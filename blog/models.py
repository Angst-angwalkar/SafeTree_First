from django.db import models
from datetime import datetime
from django.db.models.fields import SlugField
from django.template.defaultfilters import slugify
from django.contrib.auth import get_user_model
User = get_user_model()


class Categories(models.TextChoices):
    WORLD = 'world'
    ENVIRONMENT = 'environment'
    TREES = 'trees'
    CLIMATE = 'climate'
    SURVEYS = 'surveys'
    DRIVES = 'drives'
    FORESTATION = 'forestation'
    DIY = 'diy'

class BlogPost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    slug = models.SlugField()
    category = models.CharField(max_length=50, choices=Categories.choices, default=Categories.WORLD)
    thumbnail = models.ImageField(upload_to='photos/%Y/%m%d')
    excerpt = models.CharField(max_length=150)
    month = models.CharField(max_length=3)
    day = models.CharField(max_length=10)
    content = models.TextField()
    featured = models.BooleanField(default=False)
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset = BlogPost.objects.all().filter(slug__iexact=original_slug).count()

        count = 1
        slug = original_slug
        while(queryset):
            slug = original_slug + "-" + str(count)
            queryset = BlogPost.objects.all().filter(slug__iexact=slug).count()

        self.slug = slug

        if self.featured:
            try:
                temp = BlogPost.objects.get(featured=True)
                if self != temp:
                    temp.featured = False
                    temp.save()
            except BlogPost.DoesNotExist:
                pass

        super(BlogPost, self).save(*args, **kwargs)
    
    def __str__(self):
        return self.title