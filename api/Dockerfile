FROM node:16.8-slim as builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --silence-warnings

COPY . .
RUN npm run build
RUN rm -rf tsconfig.json

EXPOSE 8080
CMD ["npm","start"]
