import {Validation} from '../../../../app/validations/contracts/validator'
import {ValidationComposite} from '../../../../app/validations/composite'
import {RequiredFieldValidation} from '../../../../app/validations/required'


export const makeValidation = (): ValidationComposite => {
  const validation: Validation[] = []
    for (const field of ['name', 'message'])
    validation.push(new RequiredFieldValidation(field))
  return new ValidationComposite(validation)
}