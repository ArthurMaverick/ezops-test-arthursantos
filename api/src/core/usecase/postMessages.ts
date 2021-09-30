export interface PostMessages {
  saveMessages: (args: PostMessages.Input ) => PostMessages.Output 
}

export namespace PostMessages {
  export type Input = {
    name: string;
    message: string;
  }
  
  export type Output<T = any> = Promise<T> 
}