# Aplikacja dla firm

Głównym celem projektu jest stworzenie wewnętrznej aplikacji dla firm. Platforma ma przede wszystkim umożliwiać tworzenie wspólnych zamówień posiłków, ale również być podatna na rozbudowę o nowe funkcjonalności w przyszłości.

![9eats](https://github.com/PrzemyslawSalek/9eats/blob/main/9eats.gif)


## Główne funkcje:
- Platforma powinna zaczytywać dzisiejsze menu ze strony https://www.podstolem.com/restauracja/pod-stolem-2, która nie posiada wystawionego API. Automatyczne pobieranie menu o danej godzinie i zapisywanie go w bazie danych.
- Po złożeniu zamówień przez pracowników, administrator może zamknąć możliwość zamawiania i dostaje podsumowanie z listą zamówionych dań oraz kwotą zamówienia.
- Każdy ma możliwość opłacenia zamówienia lub kilku, od razu lub w późniejszym terminie, przy użyciu dostarczonej bramki płatności.
- Funkcja logowania i rejestracji
- Zapisywanie danych w bazie danych PostgreSQL.
- Profil użytkownika z historią zamówień i statusem każdego zamówienia.
- Profil administratora z zatwierdzaniem nowych użytkowników, blokowaniem użytkowników, opcją blokowania możliwości zamawiania i ponownego otwierania, lista nieopłaconych zamówień.

## Technologie
- React
- Django
- PostgreSQL
- Bramka płatności

## Uruchamianie
- Frontend:
1. Instalacja Node'a globalnie
2. Przejście do katalogu *frontend*
```
npm install
```
```
npm start
```

- Backend:
1. Instalacja pipenv globalnie (można też pip wszystkie zależności znajdują się w requirements.txt)
2. Przejście do katalogu *backend*
```
pipenv shell
```
```
pipenv install
```
3. Przejście do katalogu z *manage.py*
```
python mange.py runserver
```

- Baza danych PostgreSQL:
1. Instalacja PostgreSQL https://www.postgresql.org/download/
2. Uruchomienie servera https://tableplus.com/blog/2018/10/how-to-start-stop-restart-postgresql-server.html

## Zespół
- Przemysław Sałek
- Szymon Sala
