import { Router } from "express";
import {adaptExpressRoute as adapt} from '../adapters/express-route-adapter'
import {MakeFindController} from '../factories/app/controllers/find-factory'

export default (router: Router) => {
  router.get('/messages', adapt(MakeFindController()))
}