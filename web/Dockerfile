FROM node:16.8-slim as builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --silence

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm","start"]

