import {Router, Express} from 'express'
import { readdirSync } from 'fs'
import {join} from 'path'
import {Server} from 'socket.io'


export const setupRoutes = (app: Express, io: Server): void => {
  const router = Router()
  
  readdirSync(join(__dirname, '../routes'))
    .filter(file => !file.endsWith('.map'))
    .map(async file => {
      const importedFile = (await import(`../routes/${file}`)).default
      importedFile(router, io)
    })
    app.use('/api', router)
}