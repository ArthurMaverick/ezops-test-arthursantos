import {Middleware} from '../../app/middlewares/rules/middleware'
import {RequestHandler} from 'express'

type Adapter = (middleware: Middleware) => RequestHandler;

export const adaptExpressMiddlewares: Adapter = (middleware) => async (req, res, next) => {
 const {data,statusCode} = await middleware.handle({...req.headers})

 if (statusCode === 200) {
    const validEntries = Object.entries(data).filter(([,value]) => value)
    req.locals = {...req.locals, ...Object.fromEntries(validEntries)}
    next()
  } else {
    res.status(statusCode).json({error: data.message})
  }
}