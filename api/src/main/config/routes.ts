import {Router, Express} from 'express'
import { readdirSync} from 'fs'
import {join} from 'path'
import {Server} from 'socket.io'


export const setupRoutes = (app: Express): void => {
  const router = Router()
  
  readdirSync(join(__dirname, '../routes'))
    .filter(file => !file.endsWith('.map'))
    .map(async file => {
      (await import(`../routes/${file}`)).default(router)
      // importedFile(router)
    })
    app.use(router)
}