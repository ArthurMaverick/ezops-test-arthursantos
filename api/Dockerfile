FROM node:16.8-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN  npm ci --silence

COPY . .

RUN tsc

CMD ["npm", "start"]

EXPOSE 8000