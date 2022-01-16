from .models import Eats
from .serializers import EatsSerializers
from rest_framework.permissions import AllowAny
from rest_framework import generics
from eatsUpdater import podStolemApi
from django.http import HttpResponse

class EatView(generics.ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = EatsSerializers

    def get_queryset(self):
        a = Eats.objects.order_by('-timestamp').first()
        return Eats.objects.filter(timestamp=a.timestamp)

def refreshEatsList(request):
    podStolemApi.update_eats()
    return HttpResponse("OK")
