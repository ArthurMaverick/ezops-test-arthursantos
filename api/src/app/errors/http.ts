export class ServerError extends Error {
  constructor (error?: Error) {
  super ('Sever faild. try again soon') 
    this.name = 'ServerError';
    this.stack= error?.stack; 
  }
}

export class UnauthorizedError extends Error {
  constructor () {
    super ('Unauthorized')
    this.name = 'UnauthorizedError'
  }
}

export class ForbiddenError extends Error {
  constructor() {
    super('Access denied')
    this.name = 'ForbiddenError'
  }
}

export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Missing param: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
