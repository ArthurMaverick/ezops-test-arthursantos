require('dotenv').config()
export const env = {
  port: process.env.PORT ?? 8080,
  jwtSecret: process.env.JWT_SECRET ?? 'chavesupersecreta',
  mongoDB: process.env.MONGO_URL,
  mongoDBdev: process.env.MONGO_URL_DEV
}