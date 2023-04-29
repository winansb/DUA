# Use Node.js 14 as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies listed in package.json
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 8000 on the container
EXPOSE 8000

# Start the server by running server.js with Node.js
CMD ["node", "server.js"]