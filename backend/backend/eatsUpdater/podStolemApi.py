import imp
from eats.models import Eats
from .scrappingPodStolem import get_menu
from datetime import datetime
from django.utils import timezone

def update_eats():
    print("Pod stołem update")
    today = datetime.now(tz=timezone.utc)
    menu = get_menu(today.weekday()) #dzień tygodnia
    if menu is not None:
        for dish in menu:
            eats = Eats()
            eats.name = dish["tittle"]
            eats.ingredients = dish["ingredients"]
            eats.price = dish["price"]
            eats.timestamp = today
            eats.save()
