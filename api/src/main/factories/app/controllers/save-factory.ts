import {Controller} from '../../../../app/controllers/contracts'
import {SaveMessagesController} from '../../../../app/controllers/save'
import {makeSaveMessagens} from '../../data/mongo/account-mongo-save-repository'
import {makeValidation} from '../validation/validation-factory'

export const MakeSaveController = (): Controller =>  {
  return new SaveMessagesController(makeValidation(), makeSaveMessagens())
}