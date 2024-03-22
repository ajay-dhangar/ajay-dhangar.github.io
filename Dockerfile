# Use the official Node.js image as a base
FROM node:16.20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the CodeHarborHub site
RUN npm run build

# Use a lightweight Node.js image for serving the built site
FROM nginx:alpine

# Copy the built site from the previous stage to the NGINX directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]