export class RequiredFieldError extends Error {
  constructor (fieldName?: string) {
    const message = fieldName === undefined 
    ? 'FieldName Required'
    : `The field ${fieldName} is required`
    super(message)
    this.name = 'RequiredFieldError'
  }
}

