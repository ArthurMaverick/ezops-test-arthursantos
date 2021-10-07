import {MakeCreateUserController} from '../factories/app/controllers/save-user-factory'
import {adaptExpressRoute as Adapter} from '../adapters/express-route-adapter'
import { Router } from 'express'


export default (router: Router) => {
  router.post('/usersignup', Adapter(MakeCreateUserController()))
} 