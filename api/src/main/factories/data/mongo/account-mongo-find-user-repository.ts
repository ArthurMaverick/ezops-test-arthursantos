import {GetUser} from '../../../../core/usecase'
import {AccountMongoRepository} from '../../../../data/mongo'

export const makeFindUser = (): GetUser => {
  return new AccountMongoRepository()
}