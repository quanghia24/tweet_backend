
from django.urls import path, include
from .views import ArticleViewSet, UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='articles')
router.register('users', UserViewSet, basename='users')

urlpatterns = [
    path('', include(router.urls)),
    # path('products/', ArticalList.as_view()),

    # path('articals/<int:id>/', ArticalDetails.as_view()),

    # path('articals', artical_list),
    # path('articals/<int:pk>', artical_details),

]
