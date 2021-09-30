import { Controller } from "./controller";
import {PostMessages} from '../../core/usecase'
import { badRequest, HttpResponse, ok } from "../helpers";

type HttpRequest = { name: string, message: string}
type Model = Error | any 
export class SaveMessagesController extends Controller {
  constructor (
    private readonly save: PostMessages
  ){
    super();
  }
  async perform (body: HttpRequest): Promise<HttpResponse<Model>> {
    try {
    const result = await this.save.saveMessages(body)
      return ok(result)
    }catch (err: any) {
      return badRequest(err)
    }
  }
}