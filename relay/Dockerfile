FROM node:16 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD node index.js