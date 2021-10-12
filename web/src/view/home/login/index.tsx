import React from 'react'
import { LoginElement } from './styled'
import req from 'axios'
import jwt_decode from "jwt-decode";
import { useRouter } from 'next/dist/client/router'; 
import Link from 'next/link';

export const Loging = () => {
  const [getusername, setGetusername] = React.useState<string>('')
  const [getpassword, setGetpassword] = React.useState<string>('')
  const [logic, setLogic] = React.useState<boolean>(false)
  const route = useRouter()
  
  const handlerRequest = async (e: any) => {
    e.preventDefault()
    const payload: object = {username: getusername, password: getpassword}
    const result = await req.post('http://arthursantos.tech:2052/userlogin', payload).catch(err => err)
    console.log(result)
    if(result instanceof Error) {
      setLogic(true)
      return
    }
    const  jwt = result.data as unknown as string
    decode(jwt)
  }

  const decode = (arg: string): void => {
    const payload: any = jwt_decode(arg)
    route.push(`/chat?username=${payload.key}`)
  }

  return (
    <LoginElement>
      <div className="box">
        <main>
          <h1>Chat.IO</h1>
        </main>
        <ul>
          <li>
            <label htmlFor="username">username</label>
            <input type="text" id="username" onChange={(e)=>setGetusername(e.target.value)} placeholder="Maria" />
          </li>
          <li>
          <label htmlFor="password">password</label>
            <input type="password" id="password"  onChange={(e)=>setGetpassword(e.target.value)}  placeholder="****"/>
          </li>
        </ul>

        <button onClick={handlerRequest}>Enter</button> <button ><Link href="/signin"><a>Sign in</a></Link></button>

        {logic && <span style={{color: 'red'}}>username or password are incorrect</span>} 
      </div>
      
    </LoginElement>
  )
}
