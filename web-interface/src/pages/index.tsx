/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next'
import { useEffect } from 'react'
import io from "socket.io-client";
// import {useSocket} from '../hooks/useSockets'
let socket;
const Home: NextPage = () => {
  // const socket = useSocket('http://localhost:8080/')

  useEffect(() => {
    socket = io('http://localhost:8080/',  { transports: ['websocket', 'polling', 'flashsocket'] })
    
    socket.on('connection', (socket) => {
      console.log(socket.id)  
    })
    socket.on('send', (data) => console.log(data))

  }, [])
  
  return (
    
    <div className="container">
      
      <div className="jumbotron">
        <h1 className="display-4">Send Message</h1>
        <input id = "name" className="form-control" placeholder="Name"/>
        <textarea id = "message" className="form-control" placeholder="Your Message Here">
        </textarea>
        <button id="send" className="btn btn-success">Send</button>
      </div>
      
      <div id="messages"></div>
    </div>
    
    
  )
}

export default Home
