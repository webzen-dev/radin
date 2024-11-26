# Stage 1: Build
FROM node:18-alpine AS build
WORKDIR /pages

# Copy package files and install dependencies
COPY package*.json ./ 
RUN npm ci

# Copy the rest of the application code
COPY . .

# Generate Prisma client and build the Next.js application
RUN npx prisma generate
RUN npm run build

# Stage 2: Production
FROM node:18-alpine AS production
WORKDIR /pages

# Copy only production dependencies
COPY package*.json ./ 
RUN npm ci 

# Copy built assets and necessary files from build stage
COPY --from=build /pages/.next ./.next
COPY --from=build /pages/node_modules ./node_modules
COPY --from=build /pages/public ./public
COPY --from=build /pages/prisma ./prisma
COPY --from=build /pages/src/pages ./src/pages
COPY --from=build /pages/.env .env


# Expose the port and set the start command
EXPOSE 3000
CMD ["node", ".next/standalone/server.js"]
