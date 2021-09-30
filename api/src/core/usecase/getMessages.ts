export interface GetMessages {
  findMessages: () => GetMessages.Output
}

export namespace GetMessages {
  export type Output <T = any> = Promise<T> 
}