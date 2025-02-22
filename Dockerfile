FROM node:12.21.0-alpine3.11

RUN apk add --no-cache bash

USER node

WORKDIR /home/node/app

COPY . .
