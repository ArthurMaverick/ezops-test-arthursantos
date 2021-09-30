import { Router } from "express";
import {adaptExpressRoute as adapt} from '../adapters/express-route-adapter'
import {MakeSaveController} from '../factories/app/controllers/save-factory'
export default (router: Router) => {
  router.post('/messages', adapt(MakeSaveController()) )
}