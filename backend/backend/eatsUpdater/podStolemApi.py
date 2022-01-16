import imp
from eats.models import Eats
from .scrappingPodStolem import get_menu


def update_forecast():
    menu = get_menu(1) #dzień tygodnia
    if menu is not None:
        for dish in menu:
            eats = Eats()
            eats.name = dish["tittle"]
            eats.description = dish["description"]
            eats.price = dish["price"]
            eats.save()
