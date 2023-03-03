FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json .
RUN npm install -f --save-dev
RUN npm install -g prisma
COPY . .