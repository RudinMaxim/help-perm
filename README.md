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

### 2. Заполнить CMS тестовыми данными

После запуска CMS в отдельном терминале:

```bash
cd cms
npm run seed
```

Сид заполняет:

- контактную информацию
- тексты для страниц
- реквизиты
- услуги
- шаги
- ценности
- истории

Если сид уже запускался раньше, single types будут обновлены, а коллекции не будут задублированы.

### 3. Запуск frontend

В другом терминале:

```bash
cd app
npm install
npm run lint
npm run build
CMS_INTERNAL_URL=http://localhost:1337 NEXT_PUBLIC_CMS_URL=http://localhost:1337 npm run start
```

Frontend будет доступен на `http://localhost:3000`.

### 4. Быстрая проверка

```bash
curl -I http://localhost:1337/admin
curl -I http://localhost:3000
curl http://localhost:1337/api/contact-info
```

### 5. Проверка интеграции CMS и app

В проекте есть две основные интеграции:

1. SSR-чтение контента из CMS
2. Отправка формы из UI в CMS через Next.js API route

Проверка SSR:

- откройте `http://localhost:3000`
- измените тексты в Strapi Admin
- обновите страницу в браузере
- убедитесь, что новый контент отображается на сайте

Контент для UI берётся серверно из `app/src/lib/cms.ts` через `CMS_INTERNAL_URL`.

Проверка формы:

- откройте форму на сайте
- отправьте тестовую заявку
- откройте Strapi Admin
- убедитесь, что запись появилась в коллекции `Заявка`

Цепочка отправки такая:

`UI -> /api/contact (Next.js) -> /api/applications (Strapi)`

## Запуск через Docker Compose

```bash
cd infrastructure
docker compose build cms web
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

### Seed для Docker Compose

После запуска стека можно заполнить CMS тестовыми данными так:

```bash
cd infrastructure
docker compose exec -T cms npm run seed:prod
```

После этого проверьте:

```bash
docker compose exec -T cms node -e "fetch('http://127.0.0.1:1337/api/contact-info').then(r=>r.text()).then(console.log)"
docker compose exec -T cms node -e "fetch('http://web:3000').then(r=>{console.log(r.status);return r.text()}).then(t=>console.log(t.slice(0,300)))"
```

### Что важно знать про CMS-образ

- CMS использует `sqlite` через `better-sqlite3`
- для сборки native-модуля в [cms/Dockerfile](cms/Dockerfile) уже установлены `python3`, `make`, `g++`
- если падает именно шаг `npm ci` внутри сборки CMS-образа, это обычно не проблема `sqlite`, а проблема сети или registry

Проверка только сборки образов:

```bash
cd infrastructure
docker compose build cms web
```

Если `web` собирается, а `cms` падает на `RUN npm ci`, сначала смотрите на:

- доступ сервера до `registry.npmjs.org`
- proxy/firewall
- временные сетевые сбои `ECONNRESET` / `ETIMEDOUT`
- ограничения CI runner на исходящие подключения

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
apt install -y ca-certificates curl git openssl nano locales ython3 python3-pip make g++
timedatectl set-timezone Europe/Moscow
locale-gen en_US.UTF-8
update-locale LANG=en_US.UTF-8
```

### 3. Создать администратора и Открыть порты

Создаём пользователя `admin`:

```bash
adduser admin
usermod -aG sudo admin
groups admin
```

Открыть конфигурацию SSH (меняем значения для PermitRootLogin ):
```bash
nano /etc/ssh/sshd_config
PermitRootLogin no
```

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
docker compose build cms web
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

### 14. Диагностика Docker build и CI

#### Ошибка `C:\\Users\\<user>\\.docker\\buildx\\.lock: Access is denied`

Это не ошибка проекта и не проблема Dockerfile.

Обычно это значит:

- Docker build запускается из среды без доступа к домашней папке пользователя
- runner запущен от другого пользователя
- нет прав на запись в `%USERPROFILE%\\.docker\\buildx`

На локальной Windows-машине или self-hosted runner это исправляется так:

- запускать сборку от того же пользователя, под которым настроен Docker Desktop
- убедиться, что пользователь входит в группу `docker-users`
- при необходимости задать отдельный `DOCKER_CONFIG`, чтобы buildx не писал в домашний профиль

Пример для PowerShell:

```powershell
$env:DOCKER_CONFIG="$PWD\\.docker-config"
docker compose build cms web
```

Пример для Linux runner:

```bash
export DOCKER_CONFIG="$PWD/.docker-config"
docker compose build cms web
```

Это особенно полезно для CI и self-hosted runner, где несколько сборок могут делить один Docker profile.

#### Ошибка `npm ci` / `ECONNRESET` внутри `cms`-сборки

Если сборка падает на шаге `RUN npm ci` в `cms`, но не падает на `apt-get install python3 make g++`, проблема почти наверняка в сети, а не в `sqlite`.

Что проверить на сервере:

- доступ до `https://registry.npmjs.org`
- DNS-резолвинг
- proxy / corporate firewall
- нестабильность исходящего канала

Полезные команды:

```bash
curl -I https://registry.npmjs.org
docker compose build cms
docker compose logs --tail 100 cms
```

Если это происходит в CI эпизодически, типовой вывод такой:

- повторный запуск job
- использование npm registry mirror
- настройка retry для npm
- отдельный кэш зависимостей на уровне CI

#### Проверка, что проблема не в `sqlite`

Если хотите проверить именно native-зависимость для `sqlite`, достаточно успешной сборки CMS-образа:

```bash
cd /opt/help-perm/infrastructure
docker compose build cms
```

Если этот шаг проходит, значит:

- `python3` доступен на build stage
- `better-sqlite3` собрался корректно
- Dockerfile пригоден для серверного запуска

#### Проверка после запуска стека

После `docker compose up -d --build`:

```bash
docker compose ps
docker compose logs --tail 200 cms
docker compose exec -T cms node -e "fetch('http://127.0.0.1:1337/api/contact-info').then(r=>{console.log(r.status);return r.text()}).then(console.log)"
```

Если последний запрос возвращает `200`, CMS внутри контейнера поднята и API отвечает.

## Примечания по текущему проекту

- `infrastructure/.env` является единым источником переменных для `web`, `cms`, `nginx`
- CMS использует `sqlite`
- frontend внутри docker-сети ходит в CMS по адресу `http://cms:1337`
- публичный URL CMS задаётся через `STRAPI_PUBLIC_URL`
