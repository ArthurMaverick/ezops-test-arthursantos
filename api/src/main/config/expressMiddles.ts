import  {Express, json, Request, Response, NextFunction} from 'express'
import cors from 'cors'

export const setupMiddlewares = (app: Express): void  => {
  // app.use((req,res,next)=> {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  //   res.header("Access-Control-Allow-Headers", "X-PINGOTHER, content-type, Authorization");
//   next();
// })
  app.use(cors())
  app.use(json())
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.type('json')
    next()
    })
}