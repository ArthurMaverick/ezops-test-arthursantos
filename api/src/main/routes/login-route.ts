import {MakeFindUserController} from '../factories/app/controllers/find-user-factory'
import {adaptExpressRoute as Adapter} from '../adapters/express-route-adapter'
import { Router } from 'express'


export default (router: Router) => {
  router.post('/userlogin', Adapter(MakeFindUserController()))
} 