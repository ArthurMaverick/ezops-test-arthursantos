import {PostMessages} from '../../../../core/usecase'
import {AccountMongoRepository} from '../../../../data/mongo'

export const makeSaveMessagens = (): PostMessages => {
  return new AccountMongoRepository()
}