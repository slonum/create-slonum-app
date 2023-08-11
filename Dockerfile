ARG NODE_IMAGE_NAME=18-bullseye-slim
FROM node:${NODE_IMAGE_NAME} AS deps
RUN npm install -g npm

WORKDIR /app
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

COPY package*.json .
RUN --mount=type=cache,target=/root/.npm,sharing=locked npm ci

FROM node:${NODE_IMAGE_NAME} AS builder
RUN npm install -g npm

WORKDIR /app
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV} NEXT_TELEMETRY_DISABLED=1

COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:${NODE_IMAGE_NAME}
RUN npm install -g npm

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json /app/.env /app/tsconfig.json /app/environment.d.ts ./

CMD ["node", "/app/node_modules/.bin/next", "start"]
