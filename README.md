# Aplikacja dla firm

## Opis

Głównym celem projektu jest stworzenie wewnętrznej aplikacji dla firm. Platforma ma przede wszystkim umożliwiać tworzenie wspólnych zamówień posiłków, ale również być podatna na rozbudowę o nowe funkcjonalności w przyszłości.

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

## Zespół
- Przemysław Sałek
- Szymon Sala
