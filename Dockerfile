FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
COPY src ./src
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "src/index.js"]
