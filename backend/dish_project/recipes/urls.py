from rest_framework import routers
from django.urls import path, include
from .views import DishViewSet, CategoryViewSet, RecipeByCategoryViewSet
from django.urls import re_path
from rest_framework import permissions
from recipes.views import schema_view

router = routers.DefaultRouter()
router.register('recipes', DishViewSet)
router.register('categories', CategoryViewSet)
router.register('categories/(?P<category_id>\d+)/recipes', RecipeByCategoryViewSet, basename='recipes-by-category')


urlpatterns = [
    path('', include(router.urls)),
    path('swagger<format>/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]