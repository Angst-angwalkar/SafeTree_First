from django.urls import path
from django.urls.resolvers import URLPattern
from .views import BlogPostListView, BlogPostFeaturedView, BlogPostDetailView, BlogPostCategoryView


urlpatterns = [
    path('bloglist/', BlogPostListView.as_view()),
    path('category/', BlogPostCategoryView.as_view()),
    path('featured/', BlogPostDetailView.as_view()),
    path('<slug>', BlogPostFeaturedView.as_view())
]