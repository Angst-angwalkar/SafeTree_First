from django.urls import path
from django.conf.urls.static import static
from django.conf import settings    
from .views import Profile

urlpatterns=[
    path('profile/', Profile.as_view(), name="profile"),
    path('api/contact', Profile.sendSimpleEmail),
]+static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)