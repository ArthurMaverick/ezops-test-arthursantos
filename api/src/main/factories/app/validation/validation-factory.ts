import {Validation} from '../../../../app/validations/contracts/validator'
import {ValidationComposite} from '../../../../app/validations/composite'
import {RequiredFieldValidation} from '../../../../app/validations/required'


export const makeValidation = (): ValidationComposite => {
  const validation: Validation[] = []
    validation.push(new RequiredFieldValidation('name'))
  return new ValidationComposite(validation)
}