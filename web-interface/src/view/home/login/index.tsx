import React from 'react'
import { LoginElement } from './styled'


export const Loging = () => {
  const [getusername, setGetusername] = React.useState<string | null>(null)
  const [getpassword, setGetpassword] = React.useState<string | null>(null)

  const sendLog = () => {
    
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
            <input type="text" id="username" placeholder="Maria"/>
          </li>
          <li>
          <label htmlFor="password">password</label>
            <input type="password" id="password"   placeholder="****"/>
          </li>
        </ul>

        <button onClick={() => sendLog()}>Enter</button>
      </div>
      
    </LoginElement>
  )
}
