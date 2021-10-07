import {Controller} from '../../../../app/controllers/contracts'
import {CreateUserController} from '../../../../app/controllers/signup'
import {makeFindUser,makeSaveUser} from '../../data/mongo/'
import {makeJWTtokenHandler} from '../../data/gateways/token-handler'
import {makeUserLoginValidation} from '../validation/validation-user-request'

export const MakeCreateUserController = (): Controller =>  {
  return new CreateUserController(
    makeUserLoginValidation(),
    makeSaveUser(),
    makeFindUser(),
    makeJWTtokenHandler()
  )
}