from rest_framework.response import Response
from eats.models import Eats
from .models import Order
from .serializers import OrderSerializers, PaidSerializers
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics


class OrderView(generics.ListCreateAPIView):
    permission_classes = []
    serializer_class = OrderSerializers

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        total_order_price = 0
        for d in serializer.data["dishes"]:
            eats = Eats.objects.filter(id=d["id"]).first()
            total_order_price += eats.price * d["amount"]
            d["name"] = eats.name
            d["price"] = eats.price

        order = Order.objects.create(
            dishes=serializer.data["dishes"],
            user=str(serializer.context["request"].user),
            price=total_order_price
        )
        order.save()
        return order.id
        

    def create(self, request):
        print(request.data)
        total_order_price = 0
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        id = self.perform_create(serializer)
        return Response({"id": id})


class PaidView(generics.CreateAPIView):
    permission_classes = []
    serializer_class = PaidSerializers

    def perform_create(self, serializer):
        for p in serializer.data["paid"]:
            Order.objects.filter(id=p).update(paid=True)
        
    

