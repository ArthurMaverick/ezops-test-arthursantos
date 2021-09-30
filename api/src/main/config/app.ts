import express from 'express'
import {setupMiddlewares} from './expressMiddles'
import {setupRoutes} from './routes'
import {Server as HttpServer} from 'http'
import {Server as SocketServer} from 'socket.io'

const ExpressApp  = express()
const httpServer  = new HttpServer(ExpressApp)
const io          = new SocketServer(httpServer)

setupMiddlewares(ExpressApp)
setupRoutes(ExpressApp, io)

export {httpServer}