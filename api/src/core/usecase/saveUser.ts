export interface PostUser {
  saveUser: (args: PostUser.Input) => PostUser.Output 
}

export namespace PostUser {
  export type Input = {
    username: string;
    password: string;
  }
  
  export type Output<T = any> = Promise<T> 
}