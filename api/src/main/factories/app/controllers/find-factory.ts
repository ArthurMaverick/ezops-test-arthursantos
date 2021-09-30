import {Controller} from '../../../../app/controllers/contracts'
import {FindMessagesController} from '../../../../app/controllers/find'
import {makeAddMessagens} from '../../data/mongo/account-mongo-find-repository'

export const MakeFindController =  (): Controller =>  {
  return new FindMessagesController(makeAddMessagens())
}