# 9eats — Company Meal Ordering Platform

An internal web application for companies that enables employees to collaboratively place group food orders. Built to be extensible for future company-wide features beyond meal ordering.

![9eats demo](https://github.com/PrzemyslawSalek/9eats/blob/main/9eats.gif)

## Features

- **Automated menu scraping** — daily menu is automatically fetched from the restaurant website (no public API) using BeautifulSoup and scheduled with APScheduler, then saved to the database
- **Group ordering** — employees browse the daily menu and place individual orders that are aggregated into a single group order
- **Admin controls** — admin can close the ordering window and receive a summary with the full list of ordered dishes and total cost
- **Payments** — each user can pay for their order (or multiple orders) immediately or at a later time via an integrated payment gateway (Paystack)
- **Authentication** — JWT-based registration and login
- **User profile** — order history and per-order status tracking
- **Admin panel** — approve or block users, open/close ordering, view unpaid orders list

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 17, React Router 6, Bootstrap 5, Axios |
| Backend | Django 4, Django REST Framework, APScheduler |
| Scraping | BeautifulSoup4 |
| Auth | JWT (djangorestframework-simplejwt) |
| Payments | Paystack (react-paystack) |
| Database | PostgreSQL |

## Getting Started

### Frontend

> Requires Node.js installed globally.

```bash
cd frontend
npm install
npm start
```

App runs at `http://localhost:3000` (proxied to the backend at `http://localhost:8000`).

### Backend

> Requires `pipenv` installed globally. Alternatively, install dependencies from `requirements.txt` using `pip`.

```bash
cd backend
pipenv shell
pipenv install
cd backend        # directory containing manage.py
python manage.py runserver
```

### Database

1. Install PostgreSQL: https://www.postgresql.org/download/
2. Start the PostgreSQL server: https://tableplus.com/blog/2018/10/how-to-start-stop-restart-postgresql-server.html
3. Apply migrations:

```bash
python manage.py migrate
```

## Project Structure

```
9eats/
├── backend/
│   └── backend/
│       ├── api/          # REST API entry points
│       ├── auth/         # User registration & JWT auth
│       ├── eats/         # Menu models and views
│       ├── eatsUpdater/  # Scheduled menu scraper (APScheduler)
│       └── orders/       # Order management
└── frontend/
    └── src/
        ├── components/   # Reusable UI components
        ├── containers/   # Page-level containers
        └── utils/        # Shared helpers
```

## Team

- Przemysław Sałek
- Szymon Sala

## License

See [LICENSE](LICENSE).
