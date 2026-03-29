# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

Monorepo с тремя директориями:

- **`app/`** — Next.js 14 frontend (standalone output)
- **`cms/`** — Strapi 5 headless CMS (SQLite, порт 1337)
- **`infrastructure/`** — Docker Compose + Nginx; **единый `.env`** для всех сервисов

## Commands

### app/ (Next.js)

```bash
cd app
npm run dev       # dev-сервер на :3000 (нужен запущенный CMS на :1337)
npm run build
npm run start
npm run lint
```

Для локальной разработки нужен `.env.local` в `app/` с:
```
CMS_INTERNAL_URL=http://localhost:1337
NEXT_PUBLIC_CMS_URL=http://localhost:1337
```

### cms/ (Strapi)

```bash
cd cms
npm run dev       # develop с autoReload
npm run build     # build admin panel
npm run start     # production
```

Скопировать `cms/.env.example` в `cms/.env` перед первым запуском.

### infrastructure/ (Docker)

```bash
cd infrastructure
docker compose up -d      # запустить всё: app + cms + nginx
docker compose up --build # пересобрать образы
```

Все переменные — в `infrastructure/.env`. Docker Compose автоматически подхватывает этот файл.

## App Architecture

### Next.js App Router

Маршруты в `src/app/(page)/`:
- `(home)/` — главная
- `aboutus/` — о нас
- `consultation/` — консультация
- `results/` — результаты
- `requisites/` — реквизиты

Каждая страница — **async server component**, который параллельно запрашивает данные из CMS через хелперы из `src/lib/cms.ts`.

### CMS-клиент (`src/lib/cms.ts`)

Содержит типы и функции для всех контент-типов:
- `getContactInfo()`, `getServices()`, `getSteps()`, `getValues()`, `getStories()`, `getSiteContent()`, `getRequisites()`
- `cmsMediaUrl(media)` — строит полный URL медиафайла из Strapi
- Использует `CMS_INTERNAL_URL` (docker-internal) для серверных запросов
- Возвращает `null`/`[]` при недоступности CMS (не падает)

### Иконки (`src/lib/icons.tsx`)

Клиентский компонент `<CmsIcon name="FaPills" size={32} />`. Иконки хранятся в CMS как строки (имя react-icons), маппинг — в этом файле. При добавлении новой иконки — добавить в `iconMap`.

### Форма заявок

`ContactUs` → `useContactForm` → `POST /api/contact` → Strapi `/api/applications`

Маршрут `src/app/api/contact/route.ts` добавляет IP, user-agent, referer и передаёт в Strapi.

### Передача контактных данных в компоненты

`layout.tsx` (server) → `getContactInfo()` → `<Header mainPhone email />` → props

Каждая страница самостоятельно вызывает `getContactInfo()` для передачи в `<ContactUs>`. Next.js дедублирует идентичные fetch-запросы за один рендер.

## CMS Architecture

### Контент-типы

| Тип | Kind | Назначение |
|-----|------|-----------|
| `contact-info` | Single | Телефоны, email, Telegram, MAX |
| `site-content` | Single | Тексты hero-секций, баннеров, команды |
| `requisites` | Single | Реквизиты организации |
| `service` | Collection | Услуги (с полем `icon` — имя react-icon) |
| `step` | Collection | Шаги "Как мы работаем" |
| `value` | Collection | Ценности организации |
| `story` | Collection | Истории успеха (с медиа-полем `image`) |
| `application` | Collection | Заявки с сайта |

Сортировка коллекций — по полю `order`.

### Bootstrap разрешений

`cms/src/index.ts` автоматически выставляет публичные разрешения при первом запуске:
- `find`/`findOne` — для всех read-типов
- `create` — только для `application`

### Первичное заполнение данных

После первого запуска CMS (`npm run dev`) зайти в Strapi Admin (`http://localhost:1337/admin`), создать admin-аккаунт и заполнить данные через UI.

## Infrastructure

### Nginx

- Порт **80** → Next.js (web:3000)
- Порт **1337** → Strapi (cms:1337) — для доступа к admin и API

### Volumes (docker-compose)

- `cms_uploads` — медиафайлы Strapi
- `cms_database` — SQLite база данных (`.tmp/`)

### Единый .env

`infrastructure/.env` содержит переменные для всех сервисов. `docker-compose.yml` явно маппит каждую переменную в нужный сервис, избегая конфликтов имён (`PORT` → отдельные переменные `STRAPI_HOST`/`STRAPI_PORT`).
