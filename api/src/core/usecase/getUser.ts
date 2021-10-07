export interface GetUser {
  findUser: (agrs: GetUser.Input) => GetUser.Output
}

export namespace GetUser {
  export type Input<T=any> = T
  export type Output <T = any> = Promise<T> 
}