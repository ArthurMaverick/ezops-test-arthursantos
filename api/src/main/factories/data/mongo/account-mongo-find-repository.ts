import {GetMessages} from '../../../../core/usecase'
import {AccountMongoRepository} from '../../../../data/mongo'

export const makeAddMessagens = (): GetMessages => {
  return new AccountMongoRepository()
}