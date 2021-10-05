FROM node:16.8-slim as builder

WORKDIR /usr/src/app

COPY api/package*.json ./
RUN npm install

COPY api .
RUN npm run build

EXPOSE 8080
CMD ["npm","run","dev"]
