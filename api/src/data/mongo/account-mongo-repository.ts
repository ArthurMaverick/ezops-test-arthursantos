import {MongoHelper} from './mongo-helper.ts'
import {GetMessages, PostMessages} from '../../core/usecase'


export class AccountMongoRepository implements GetMessages, PostMessages {
  
  
  async findMessages (): GetMessages.Output { 
    const accountCollection = MongoHelper.getCollection('messages')
    const messages = await accountCollection.findOne()
    return messages 
  }
  async saveMessages( payload: PostMessages.Input ): PostMessages.Output<boolean> {
    const accountCollection = MongoHelper.getCollection('messages')
    const result = await accountCollection.insertOne(payload)
    return result !== null
  }
  
}