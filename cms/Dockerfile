FROM node:22-bookworm-slim AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-bookworm-slim
WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/dist/build ./build
COPY --from=builder /app/dist/src ./src
COPY --from=builder /app/dist/config ./config
COPY --from=builder /app/public ./public

EXPOSE 1337
CMD ["npm", "run", "start"]
