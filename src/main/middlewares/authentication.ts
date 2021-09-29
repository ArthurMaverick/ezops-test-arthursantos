import {adaptExpressMiddlewares} from '../adapters/express-middleware'
import {makeAuthenticationMiddleware} from '../factories/app/middlewares/authentication'

export const auth = adaptExpressMiddlewares(makeAuthenticationMiddleware())