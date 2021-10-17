import fs from 'fs'
import express from 'express'
import {createServer as HttpServer, ServerOptions} from 'https'
import {Server as SocketServer} from 'socket.io'
import {setupMiddlewares} from './expressMiddles'
import {setupRoutes} from './routes'

const options: ServerOptions = {
  key: fs.readFileSync('./certs/agent2-k.pem'),
  cert: fs.readFileSync('./certs/agent2-c.pem'),
}

const ExpressApp  = express() 
const httpServer  = HttpServer(options, ExpressApp)
const io          = new SocketServer(httpServer, {
  cors: {
    origin: "*", //change
    maxAge: 10_000
  }
})
io.on('connection', (socket) => {
  console.log('A user connected ' + socket.id);
})

ExpressApp.set('socketio', io)

setupMiddlewares(ExpressApp)
setupRoutes(ExpressApp)

export {httpServer}
