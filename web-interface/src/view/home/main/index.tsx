import React from 'react'
import Link from 'next/link'
import { MainElement } from './styled'


export const Main = () => {
  return (
    <MainElement>
      <video autoPlay loop poster="images/torres.jpg" className="bg_video">
        <source src="Network.webm" type="video/webm"/>
      </video>	

      <div>
        <h2>Talk to anyone anywhere</h2>
        <p>With Chat.IO you can talk about what you like with anyone in the world.</p>

        <ul>
          <li>✅ Talks in real time</li>
          <li>✅ Full duplex network</li>
          <li>✅ High Availability</li>
          <li>✅ Learn new languages</li>
        </ul>

      </div>

    
    


    </MainElement>
  )
}
