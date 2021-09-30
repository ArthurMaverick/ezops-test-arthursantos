import { Controller } from "./controller";
import {GetMessages} from '../../core/usecase/getMessages'
import { forbidden, HttpResponse, ok } from "../helpers";

type Model = Error | any 
export class FindMessagesController extends Controller {
  constructor (
    private readonly find: GetMessages
  ){
    super();
  }
  async perform (): Promise<HttpResponse<Model>> {
    try {
    const result = await this.find.findMessages()
      return ok(result)
    }catch (err) {
      return forbidden()
    }
  }

}