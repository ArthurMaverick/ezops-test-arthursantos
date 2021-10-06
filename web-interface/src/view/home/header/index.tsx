import React from 'react'
import Link from 'next/link'
import { HeaderElement } from './styled'


export const Header = () => {
  return (
    <HeaderElement>
    
      <div>
        <h1>Chat.IO</h1>
      </div>
      <ul>
        <li>
          <Link href="/login">
            <a >Login</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/ArthurMaverick/ezops-test-arthursantos" >
            <a target="_blank">Github</a>
          </Link>
        </li>
      </ul>
    
    </HeaderElement>
  )
}
