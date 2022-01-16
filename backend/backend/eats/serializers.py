from .models import Eats
from rest_framework import serializers


class EatsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Eats
        fields = ['name', 'price', 'description']
