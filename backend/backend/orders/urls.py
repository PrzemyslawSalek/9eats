from django.urls import path
from .views import OrderView, PaidView


urlpatterns = [
    path('orders/', OrderView.as_view(), name='orders_view'),
    path('paid/', PaidView.as_view(), name='pay_orders'),
]
