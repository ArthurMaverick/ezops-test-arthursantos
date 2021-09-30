import {env} from './config/env' 
import {MongoHelper} from '../data/mongo/mongo-helper.ts'

if (typeof env.mongoDB === 'string') {
  MongoHelper.connect(env.mongoDB)
  .then(async ()=> 
    {
    const {httpServer} = require('./config/app');
    httpServer.listen(env.port, 
      ()=> console.log(`server running at port ${env.port} :-) -> localhost: ${env.port}`))
    }).catch(console.error)
}
