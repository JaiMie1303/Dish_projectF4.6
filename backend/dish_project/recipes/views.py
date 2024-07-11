from rest_framework import permissions
from rest_framework import viewsets
from rest_framework.response import Response

from .models import Recipe, Category
from .serializers import RecipeSerializer, CategorySerializer

from drf_yasg import openapi
from drf_yasg.views import get_schema_view

class RecipeByCategoryViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def list(self, request, *args, **kwargs):
        category_id = self.kwargs.get('category_id')
        queryset = Recipe.objects.filter(category_id=category_id)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

class DishViewSet(viewsets.ModelViewSet):
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()


class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


schema_view = get_schema_view(
   openapi.Info(
      title="API Documentation",
      default_version='v1',
      description="API для моего проекта",
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

