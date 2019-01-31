### Multi-step process

## Build temporary image
# Name the stage as builder
FROM node as builder

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

RUN npm run build


## Set up the static web page server
FROM nginx

# 'Define' the network ports that this container will listen on at runtime.
EXPOSE 80

# Copy the file from previous stage
COPY --from=builder /app/dist /usr/share/nginx/html