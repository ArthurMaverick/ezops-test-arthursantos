import {PostUser} from '../../../../core/usecase'
import {AccountMongoRepository} from '../../../../data/mongo'

export const makeSaveUser = (): PostUser => {
  return new AccountMongoRepository()
}