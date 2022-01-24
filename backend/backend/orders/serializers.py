from .models import Order
from rest_framework import serializers


class OrderSerializers(serializers.ModelSerializer):
    price = serializers.ReadOnlyField()
    class Meta:
        model = Order
        fields = ['id', 'dishes', 'paid', 'completed', 'timestamp', 'price']
