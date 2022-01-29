from django.db import models
from django.utils import timezone
from django.core.serializers.json import DjangoJSONEncoder

class Order(models.Model):
    dishes = models.JSONField(encoder=DjangoJSONEncoder)
    paid = models.BooleanField(default=False, blank=True)
    completed = models.BooleanField(default=False, blank=True)
    timestamp = models.DateTimeField(default=timezone.now(), blank=True, null=True)
    user = models.CharField(max_length=64)
    price = models.DecimalField(max_digits=12, decimal_places=2, null=True)


    # "dishes":[
    #      {"name": "Kopytka", "amount": 12, "price": 23.2, "ingredients": "ziemniaki"},
    #      {"name": "Kotlet", "amount": 1, "price": 12.0, "ingredients": "frytki"}
    #  ]