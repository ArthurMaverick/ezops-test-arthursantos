import {Controller} from './contracts'
import {GetMessages} from '../../core/usecase/getMessages'
import { forbidden, HttpResponse, ok, serverError } from "../helpers";


export class FindMessagesController implements Controller {
  constructor (
    private readonly find: GetMessages
  ){}
  async handle (): Promise<HttpResponse> {

    try {
      const result = await this.find.findMessages()
      return ok(result)
      
    }catch (err: any) {
      return serverError(err)
    }
  }

}