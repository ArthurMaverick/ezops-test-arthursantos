import express from 'express'
import {createServer as HttpServer} from 'http'
import {Server as SocketServer} from 'socket.io'
import {setupMiddlewares} from './expressMiddles'
import {setupRoutes} from './routes'

const ExpressApp  = express()
const httpServer  =  HttpServer(ExpressApp)
const io          = new SocketServer(httpServer, {
  cors: {
    origin: "https://ezops-test-arthursantos.vercel.app/",
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
