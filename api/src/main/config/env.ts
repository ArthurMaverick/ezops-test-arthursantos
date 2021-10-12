require('dotenv').config()
export const env = {
  port: process.env.PORT ?? 8433,
  jwtSecret: process.env.JWT_SECRET ?? 'chavesupersecreta',
  mongoDB: process.env.MONGO_URL,
}