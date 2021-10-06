import React from 'react'
import Link from 'next/link'
import { DashboardElement } from './styled'


export const Dashboard = () => {
  return (
    <DashboardElement>
      <aside>
        
          <ul >
            <li>
              <Link href="/">
              <a>Home</a> 
              </Link>
              </li>
            <li>logout</li>
          </ul>
        

        <ol className="talks">
          <li>node</li>
        </ol>

      </aside>

      <main>
        <div className="textbox">
          <input type="text" />
          <button className="submit">SEND</button>
        </div>
      </main>
    </DashboardElement>
  )
}
