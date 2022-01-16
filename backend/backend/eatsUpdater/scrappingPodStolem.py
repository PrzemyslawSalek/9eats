import requests
from bs4 import BeautifulSoup


def find_addons(description):
    list_of_addons = []

    if(description.find("ziemniaki") > 0):
        list_of_addons.append("ziemniaki")

    if(description.find("ryż") > 0):
        list_of_addons.append("ryż")

    if(description.find("śmietana") > 0):
        list_of_addons.append("śmietana")

    if(description.find("skwarki") > 0):
        list_of_addons.append("skwarki")

    if(description.find("kasza gryczana") > 0):
        list_of_addons.append("kasza gryczana")

    if(description.find("frytki") > 0):
        list_of_addons.append("frytki")

    if(description.find("kasza pęczak") > 0):
        list_of_addons.append("kasza pęczak")

    return list_of_addons


def price_to_number(price):
    number = price.replace(',', '.')
    number = number[0:-3]
    return float(number)


def get_at_day(day):
    menu_id = "menu-codziennie"
    if(day == 1):
        menu_id = "menu-poniedzialek"
    if(day == 2):
        menu_id = "menu-wtorek"
    if(day == 3):
        menu_id = "menu-sroda"
    if(day == 4):
        menu_id = "menu-czwartek"
    if(day == 5):
        menu_id = "menu-piatek"

    URL = "https://www.podstolem.com/restauracja/pod-stolem-2"
    page = requests.get(URL)

    soup = BeautifulSoup(page.content, "html.parser")

    day_menu = soup.find(id=menu_id)

    tittle_of_dishes = day_menu.find_all("h4", class_="m-item__title")
    price_of_dishes = day_menu.find_all("button", class_="add-button")
    description_of_dishes = day_menu.find_all(
        "div", class_="m-item__description")

    list_of_dishes = []

    for i in range(len(tittle_of_dishes)):
        list_of_dishes.append({"tittle": tittle_of_dishes[i].text.strip(), "price": price_to_number(
            price_of_dishes[i].text.strip()), "description": find_addons(description_of_dishes[i].text.strip())})

    return list_of_dishes


def get_menu(day):
    daily = get_at_day(0)
    if day < 5:  # when monday to friday
        for d in get_at_day(day+1):
            daily.append(d)
    return daily
