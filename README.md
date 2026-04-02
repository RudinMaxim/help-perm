# help-perm

Монорепозиторий с тремя частями:

- `app/` - Next.js 14 frontend
- `cms/` - Strapi 5 CMS
- `infrastructure/` - Docker Compose и Nginx

Проект рассчитан на запуск через Docker Compose:

- `web` - frontend
- `cms` - Strapi
- `nginx` - reverse proxy + Let's Encrypt

## Структура

```text
app/             Next.js приложение
cms/             Strapi CMS
infrastructure/  docker-compose.yml, .env, nginx-конфиги
```

## Локальный запуск

### 1. Запуск CMS

```bash
cd cms
npm install
npm run build
npm run start
```

CMS будет доступна на `http://localhost:1337`.

### 2. Запуск frontend

В другом терминале:

```bash
cd app
npm install
npm run lint
npm run build
CMS_INTERNAL_URL=http://localhost:1337 NEXT_PUBLIC_CMS_URL=http://localhost:1337 npm run start
```

Frontend будет доступен на `http://localhost:3000`.

### 3. Быстрая проверка

```bash
curl -I http://localhost:1337/admin
curl -I http://localhost:3000
curl http://localhost:1337/api/contact-info
```

## Запуск через Docker Compose

```bash
cd infrastructure
docker compose up -d --build
docker compose ps
docker compose logs --tail 100 cms
docker compose logs --tail 100 web
docker compose logs --tail 100 nginx
```

Остановить:

```bash
docker compose down
```

## Деплой на Ubuntu VPS

Ниже инструкция для Ubuntu 22.04/24.04.

### 1. Подготовить DNS

До запуска на сервере домены должны смотреть на IP VPS.

Для текущей конфигурации проекта нужны записи:

- `@`
- `www`
- `cms`

Все они должны указывать на IP сервера.

Если используете другой домен, до запуска нужно поменять его в файлах:

- `infrastructure/.env`
- `infrastructure/user_conf.d/main.conf`
- `infrastructure/user_conf.d/cms.conf`

### 2. Подключиться к серверу и обновить систему

```bash
ssh root@YOUR_SERVER_IP
apt update && apt upgrade -y
apt install -y ca-certificates curl git openssl nano
timedatectl set-timezone Europe/Moscow
```

### 3. Открыть порты

Если используете `ufw`:

```bash
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable
ufw status
```

Если у провайдера VPS есть внешний firewall или security group, там тоже должны быть открыты:

- `22/tcp`
- `80/tcp`
- `443/tcp`

### 4. Установить Docker и Docker Compose plugin

Официальная документация Docker для Ubuntu:

- https://docs.docker.com/engine/install/ubuntu/

Команды установки:

```bash
apt remove -y docker.io docker-compose docker-compose-v2 podman-docker containerd runc || true

apt update
apt install -y ca-certificates curl
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
chmod a+r /etc/apt/keyrings/docker.asc

cat >/etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")
Components: stable
Signed-By: /etc/apt/keyrings/docker.asc
EOF

apt update
apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
systemctl enable docker
systemctl start docker

docker --version
docker compose version
docker run --rm hello-world
```

### 5. Склонировать проект

```bash
mkdir -p /opt/help-perm
cd /opt/help-perm
git clone YOUR_REPOSITORY_URL .
```

### 6. Настроить переменные окружения

Открыть файл:

```bash
cd /opt/help-perm/infrastructure
nano .env
```

Обязательно поменять:

- `CERTBOT_EMAIL`
- `APP_KEYS`
- `API_TOKEN_SALT`
- `ADMIN_JWT_SECRET`
- `TRANSFER_TOKEN_SALT`
- `ENCRYPTION_KEY`
- `JWT_SECRET`

Сгенерировать секреты можно так:

```bash
for i in 1 2 3 4 5 6; do openssl rand -hex 32; done
```

Если домен отличается от текущего, обновите в `.env`:

```env
NEXT_PUBLIC_CMS_URL=https://cms.YOUR-DOMAIN
STRAPI_PUBLIC_URL=https://cms.YOUR-DOMAIN
CERTBOT_EMAIL=you@example.com
```

### 7. При необходимости поправить Nginx-конфиги

Если домен другой, откройте:

```bash
nano /opt/help-perm/infrastructure/user_conf.d/main.conf
nano /opt/help-perm/infrastructure/user_conf.d/cms.conf
```

Нужно заменить:

- `server_name`
- пути сертификатов в `/etc/letsencrypt/live/...`

### 8. Запустить стек

```bash
cd /opt/help-perm/infrastructure
docker compose up -d --build
```

Первый запуск может занять несколько минут.

### 9. Проверить, что контейнеры поднялись

```bash
cd /opt/help-perm/infrastructure
docker compose ps
docker compose logs --tail 100 cms
docker compose logs --tail 100 web
docker compose logs --tail 100 nginx
```

Ожидаемые признаки:

- в `cms` есть `Strapi started successfully`
- в `web` есть `Ready`
- `nginx` не уходит в бесконечные ошибки по сертификатам

### 10. Проверить сайт и CMS

```bash
curl -I http://YOUR-DOMAIN
curl -I http://cms.YOUR-DOMAIN/admin
curl -k -I https://YOUR-DOMAIN
curl -k -I https://cms.YOUR-DOMAIN/admin
```

Обычно:

- `http` отвечает `301` на `https`
- `https://cms.../admin` отвечает `200` или `302`
- `https://YOUR-DOMAIN` открывает frontend

### 11. Создать первого администратора Strapi

Откройте в браузере:

```text
https://cms.YOUR-DOMAIN/admin
```

Создайте admin-пользователя и заполните контент через панель Strapi.

Пока CMS пустая, некоторые API могут отвечать `404` или возвращать пустые данные.

### 12. Повседневные команды

Обновить приложение:

```bash
cd /opt/help-perm
git pull
cd infrastructure
docker compose up -d --build
```

Посмотреть логи:

```bash
cd /opt/help-perm/infrastructure
docker compose logs -f cms
docker compose logs -f web
docker compose logs -f nginx
```

Перезапуск:

```bash
cd /opt/help-perm/infrastructure
docker compose restart
```

Остановка:

```bash
cd /opt/help-perm/infrastructure
docker compose down
```

### 13. Частые причины проблем

- DNS ещё не распространился
- закрыты порты `80` и `443`
- домен в `.env` не совпадает с доменом в `user_conf.d/*.conf`
- сертификаты Let's Encrypt не могут выпуститься, потому что домен не смотрит на VPS
- Strapi поднят, но не заполнен данными

## Примечания по текущему проекту

- `infrastructure/.env` является единым источником переменных для `web`, `cms`, `nginx`
- CMS использует `sqlite`
- frontend внутри docker-сети ходит в CMS по адресу `http://cms:1337`
- публичный URL CMS задаётся через `STRAPI_PUBLIC_URL`

