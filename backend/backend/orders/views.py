from .models import Order
from .serializers import OrderSerializers
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics


class OrderView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = OrderSerializers

    def get_queryset(self):
        obj = []
        for o in Order.objects.filter(user=self.request.user):
            order_price = 0
            for dish in o.dishes:
                order_price += dish["price"] * dish["amount"]
            o.price = order_price
            obj.append(o)

        return obj

    def perform_create(self, serializer):
        order = Order.objects.create(
            dishes=serializer.data["dishes"],
            user=str(serializer.context["request"].user)
        )
        order.save()