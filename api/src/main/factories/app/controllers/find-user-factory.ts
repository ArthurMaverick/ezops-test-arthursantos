import {Controller} from '../../../../app/controllers'
import {FindUserController} from '../../../../app/controllers' // TODO big path
import {makeFindUser} from '../../data/mongo'
import {makeJWTtokenHandler} from '../../data/gateways/token-handler'
import {makeUserLoginValidation} from '../validation'


export const MakeFindUserController = (): Controller =>  {
  return new FindUserController(
    makeUserLoginValidation(),
    makeFindUser(),
    makeJWTtokenHandler()
  )
}