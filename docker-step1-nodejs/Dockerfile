# Specify a base image
FROM node

# Configurate base working space in container
WORKDIR /my-app

# package.json will be copyed to WORKDIR
# If package.json isn't edited from last building time, docker will use cache and not copy package.json again.
COPY ./package.json .

# Install some dependencies
# If previos steps are all used cache, this step will also use cache and not run this command to install all dependencies.
RUN npm install

# Copy all project files to WORKDIR
COPY . .

# Default command
CMD ["npm", "start"]