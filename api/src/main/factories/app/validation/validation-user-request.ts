import {Validation} from '../../../../app/validations/contracts/validator'
import {ValidationComposite} from '../../../../app/validations/composite'
import {RequiredFieldValidation} from '../../../../app/validations/required'


export const makeUserLoginValidation = (): ValidationComposite => {
  const validation: Validation[] = []
    for (const field of ['username', 'password'])
    validation.push(new RequiredFieldValidation(field))
  return new ValidationComposite(validation)
}