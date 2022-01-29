from django.urls import path
from .views import OrderView, PaidView


urlpatterns = [
    path('orders/', OrderView.as_view(), name='eat_view'),
    path('paid/', PaidView.as_view(), name='eat_view'),
]
