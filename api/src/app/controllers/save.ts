import { Controller } from "./contracts";
import {PostMessages} from '../../core/usecase'
import { badRequest, HttpResponse, ok, serverError } from "../helpers";
import { Validation } from '../validations';

export class SaveMessagesController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly save: PostMessages
  ){}
  async handle (body: SaveMessages.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(body)
      if (error) return badRequest(error)
      
      const result = await this.save.saveMessages(body)
      return ok(result)

    }catch (err: any) {
      return serverError(err)
    }
  }
}

export namespace SaveMessages {
  export type Request = {
    name: string, message: string
  }
}