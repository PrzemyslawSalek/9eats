from .models import Eats
from .serializers import EatsSerializers
from rest_framework.permissions import AllowAny
from rest_framework import generics


class EatView(generics.ListAPIView):
    queryset = Eats.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = EatsSerializers
