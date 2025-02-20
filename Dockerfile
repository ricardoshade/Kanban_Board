# Use the official Node.js image as the base image
FROM node:14

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json from the Develop directory
COPY Develop/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code from the Develop directory
COPY Develop .

# Build the client application
RUN npm run client:build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
