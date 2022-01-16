
from django.db import models
from django.contrib.postgres.fields import ArrayField

class Eats(models.Model):
    name = models.CharField(max_length=150)
    price = models.DecimalField(max_digits=12, decimal_places=2)
    description = ArrayField(models.CharField(max_length=32))
    timestamp = models.DateTimeField()

