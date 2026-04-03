FROM node:20-alpine AS base
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

FROM base AS build
WORKDIR /opt/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM base AS run
WORKDIR /opt/app
RUN chown node:node /opt/app
COPY --from=build --chown=node /opt/app ./
USER node
EXPOSE 1337
CMD ["npm", "run", "start"]
