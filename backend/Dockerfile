    FROM node:20-alpine AS deps

    WORKDIR /app

    COPY package*.json ./
    COPY backend/package.json ./backend/package.json
    COPY frontend/package.json ./frontend/package.json
    RUN npm ci --workspace backend

    FROM deps AS build

    COPY backend/tsconfig.json ./backend/tsconfig.json
    COPY backend/src ./backend/src
    WORKDIR /app/backend
    RUN npm run build

    FROM node:20-alpine AS runner

    WORKDIR /app
    ENV NODE_ENV=production

    COPY package*.json ./
    COPY backend/package.json ./backend/package.json
    COPY frontend/package.json ./frontend/package.json
    RUN npm ci --omit=dev --workspace backend

    COPY --from=build /app/backend/dist ./backend/dist

    WORKDIR /app/backend
    EXPOSE 8000

    CMD ["npm", "start"]
