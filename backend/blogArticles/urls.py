from django.urls import path
from .views import CategoryView,PostView
urlpatterns = [
    path('category/', CategoryView.as_view()),
    path('post/', PostView.as_view()),
]