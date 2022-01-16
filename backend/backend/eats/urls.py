from django.urls import path
from .views import EatView


urlpatterns = [
    path('/', EatView.as_view(), name='eat_view'),
]
