from django.urls import path
from api.views import get_categories, get_category, get_category_products, get_product, get_products

urlpatterns = [
    path("products", get_products),
    path("products/<int:id>/", get_product),
    path("categories/", get_categories),
    path("categories/<int:id>/", get_category),
    path("categories/<int:id>/products/", get_category_products),
]
