import { Controller } from "./contracts";
import {PostUser, GetUser} from '../../core/usecase'
import {TokenGenerator} from '../../core/contracts'
import { badRequest, HttpResponse, ok, serverError, unauthorized, forbidden} from "../helpers";
import { Validation } from '../validations';
import { Server } from "socket.io";

export class CreateUserController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly post: PostUser,
    private readonly get: GetUser,
    private readonly JWT: TokenGenerator
  ){}
  async handle (body: SaveUSer.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(body)
      if (error) return badRequest(error)
      
      const userExits = await this.get.findUser({username: body.username})
      
      if (userExits) return badRequest(new Error('user already exists')) // TODO  fix that
      
      await this.post.saveUser({username: body.username, password: body.password})

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

export namespace SaveUSer {
  export type Request = {
    username: string, 
    password: string,
    socket?: Server 

  }
}