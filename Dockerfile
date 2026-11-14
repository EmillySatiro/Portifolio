# Stage 1: Build the Vite React application
FROM node:20-alpine AS build-stage

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy project files and build static bundle
COPY . .
RUN npm run build

# Stage 2: Serve application with Nginx
FROM nginx:stable-alpine AS production-stage

# Copy custom Nginx configuration if needed, or static build output
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
