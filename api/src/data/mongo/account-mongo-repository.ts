import {MongoHelper} from './mongo-helper.ts'
import {GetMessages, PostMessages, PostUser,GetUser} from '../../core/usecase'


export class AccountMongoRepository implements GetMessages, PostMessages, PostUser, GetUser {
  
  
  async findMessages (): GetMessages.Output { 
    const accountCollection = MongoHelper.getCollection('messages')

    const messages = await accountCollection.find().toArray()
      return messages
    
  }

  async saveMessages( payload: PostMessages.Input ): PostMessages.Output<boolean> {
    const accountCollection = MongoHelper.getCollection('messages')
    const result = await accountCollection.insertOne({message: payload.message, name: payload.name})
    return result !== null
  }

  async findUser (args: GetUser.Input<object>): GetUser.Output { 
    const accountCollection = MongoHelper.getCollection('users')

    const messages = await accountCollection.findOne(args)
      return messages !== null
    
  } 

  async saveUser( payload: PostUser.Input ): PostUser.Output<boolean> {
    const accountCollection = MongoHelper.getCollection('users')
    const result = await accountCollection.insertOne({username: payload.username, password: payload.password})
    return result !== null
  }

}