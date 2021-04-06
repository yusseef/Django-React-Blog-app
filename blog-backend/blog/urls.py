from django.urls import  path
from .views import BlogPostCategoryView, BlogPostDetailView, BlogPostListView, BlogPostFeaturedView

urlpatterns = [
    path('', BlogPostListView.as_view()),
    path('featured', BlogPostFeaturedView.as_view()),
    path('category', BlogPostCategoryView.as_view()),
    path('<slug>',  BlogPostDetailView.as_view()),



]