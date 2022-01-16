from django.urls import path
from .views import EatView, refreshEatsList


urlpatterns = [
    path('today/', EatView.as_view(), name='eat_view'),
    path("refresh/", refreshEatsList, name='refresh')
]
