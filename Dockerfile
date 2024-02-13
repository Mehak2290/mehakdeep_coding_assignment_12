# Use an official Node runtime as a parent image
FROM node:14-alpine as builder

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the app files to the working directory
COPY . .

# Build the app
RUN npm run build

# Use an official Nginx runtime as a parent image
FROM nginx:alpine

# Set the working directory to nginx web server directory
WORKDIR /usr/share/nginx/html

# Remove the default nginx static website
RUN rm -rf ./*

# Copy the build output from the app stage to the working directory
COPY --from=builder /usr/src/app/build .

# Expose port 80 to the outside world
EXPOSE 80

# Command to run the application
CMD ["nginx", "-g", "daemon off;"]
