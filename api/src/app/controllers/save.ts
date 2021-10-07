import { Controller } from "./contracts";
import {PostMessages} from '../../core/usecase'
import { badRequest, HttpResponse, ok, serverError } from "../helpers";
import { Validation } from '../validations';
import { Server } from "socket.io";

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
      
      body.socket.emit('send', {name: body.name, message: body.message})

      // body.socket.on('exit', (e) => {
      //   body.socket.disconnectSockets(true)
      //   console.log('disconect', e)
      // })
      return ok(result)
      
    }catch (err: any) {
      console.log(err)
      return serverError(err)
    }
  }
}

export namespace SaveMessages {
  export type Request = {
    name: string, 
    message: string,
    socket: Server 

  }
}