FROM node:18-alpine AS build

WORKDIR /pages

COPY package*.json ./
RUN npm ci

COPY . . 
RUN npx prisma generate
RUN npm run build

FROM node:18-alpine AS production

WORKDIR /pages

COPY package*.json ./
RUN npm ci --only=production

COPY --from=build /pages/.next ./.next
COPY --from=build /pages/node_modules ./node_modules
COPY --from=build /pages/public ./public
COPY --from=build /pages/prisma ./prisma
COPY --from=build /pages/src/pages ./src/pages
COPY --from=build /pages/.env .env     

RUN npx prisma migrate deploy

EXPOSE 3000

CMD ["node", ".next/standalone/server.js"]
