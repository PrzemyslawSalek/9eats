from .models import Order
from .serializers import OrderSerializers
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics


class OrderView(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated)
    serializer_class = OrderSerializers

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        order = Order.objects.create(
            dishes=serializer.data["dishes"],
            user=serializer.context["request"].user
        )
        order.save()