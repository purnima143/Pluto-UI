# Use an official Node.js runtime as the base image
FROM node:18
# Copy the application source code to the container
COPY . .
# Install the application dependencies
RUN npm install
# Expose the port
EXPOSE 6006
# Command to run the application
CMD npm run storybook

