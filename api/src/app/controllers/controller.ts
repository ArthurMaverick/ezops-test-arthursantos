import {badRequest,HttpResponse,serverError} from '../helpers'
import { Validator,ValidationComposite } from '../validations'



export abstract class Controller {

  abstract perform (httpRequest?: any): Promise<HttpResponse>

  async handle (httpRequest: any): Promise<HttpResponse> {
    if (httpRequest !== '' || httpRequest !== undefined || httpRequest !== null) {
      const error = this.validate(httpRequest)
      if (error !== undefined) return badRequest(error)
    }
  try {
    return await this.perform(httpRequest)
  } catch (error: any) {
    return serverError(error)
  }
}

  validate (httpRequest: any): Error | undefined {
    const validators = this.buildValidator(httpRequest)
    return new ValidationComposite(validators).validate()
  }

  buildValidator (httpRequest: any): Validator[] {
    return []
  }
}