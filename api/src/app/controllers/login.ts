import { Controller } from "./contracts";
import {GetUser} from '../../core/usecase'
import {TokenGenerator} from '../../core/contracts'
import { badRequest, HttpResponse, ok, serverError, unauthorized } from "../helpers";
import { Validation } from '../validations';
import { Server } from "socket.io";

export class FindUserController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly query: GetUser,
    private readonly JWT: TokenGenerator
  ){}
  async handle (body: FindUSer.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(body)
      if (error) return badRequest(error)
      
      const userExits = await this.query.findUser({username: body.username})
      const passwordExits = await this.query.findUser({password: body.password})

      if(!userExits || !passwordExits) return unauthorized()

      const options: TokenGenerator.Input = {
        key: body.username,
      }

      const JwtHash = await this.JWT.generate(options)

      return ok(JwtHash)
      
    }catch (err: any) {
      console.log(err)
      return serverError(err)
    }
  }
}

export namespace FindUSer {
  export type Request = {
    username: string, 
    password: string,
    socket?: Server 

  }
}