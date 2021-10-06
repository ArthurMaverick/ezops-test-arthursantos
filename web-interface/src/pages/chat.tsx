
/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next'
import { useEffect } from 'react'
import io from "socket.io-client";
import {Dashboard} from '../view/dashboard'
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
    <Dashboard/>
  )
}

export default Home
