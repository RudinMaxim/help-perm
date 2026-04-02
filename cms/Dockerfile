FROM node:22.22.2-bookworm-slim AS builder
WORKDIR /app

RUN apt-get update && apt-get install -y python3 make g++ \
 && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22.22.2-bookworm-slim
WORKDIR /app

COPY --from=builder /app ./

EXPOSE 1337
CMD ["npm", "run", "start"]