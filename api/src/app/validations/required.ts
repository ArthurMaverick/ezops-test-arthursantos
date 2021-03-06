import { Validation } from './contracts'
import { MissingParamError } from '../errors/http'

export class RequiredFieldValidation implements Validation {
  constructor (private readonly fieldName: string) {}

  validate (input: any): Error {
     
        if (!input[this.fieldName]) {
          return new MissingParamError(this.fieldName)
        
      }
    
  }
}
