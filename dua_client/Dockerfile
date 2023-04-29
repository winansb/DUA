# Use Node.js 14 as the base image for the build stage
FROM node:14 AS build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies listed in package.json
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Start a new stage with Nginx 1.19 as the base image
FROM nginx:1.19

# Copy the build output from the previous stage to the Nginx default public directory
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80 (default) on the container
EXPOSE 80

# Start Nginx with a custom configuration
CMD ["nginx", "-g", "daemon off;"]