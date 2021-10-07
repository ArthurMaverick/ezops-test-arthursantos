import React from 'react'
import Link from 'next/link'
import { DashboardElement } from './styled'


type DashboarProps = { 
  req: ()=> void
  getMessage: (e: any)=> void
  msg: string
  talks: any[]
  toggle: boolean
  setToggle:(e: any)=> void
}
export const Dashboard = (props:DashboarProps) => {

  

  
  return (
    <DashboardElement>
      <aside>
        
          <ul >
            <li>
              <Link href="/">
              <a>Home</a> 
              </Link>
              </li>
            
          </ul>
        

        <ol className="talks">
          <li>node</li>
        </ol>

      </aside>

      <main>

      <div className="textbox">
          <input type="text" value={props.msg} onChange={(e)=>props.getMessage(e.target.value)} />
          <button className="submit" onClick={()=>{
            props.req(),
            props.setToggle(!props.toggle)
          }
          }>SEND</button>
        </div>

        <div className="screen">

          {
            props.talks.map(({name, message}) => (
                
              <div  key={Math.random()} className="container">
              <span style={{color: 'black'}}>{name}</span>  
              <div className="talk">
                <p>{message}</p>
              </div>
            </div> 
          ))
          }

        </div> 

       
      </main>
    </DashboardElement>
  )
}
