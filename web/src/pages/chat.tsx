/* eslint-disable react-hooks/exhaustive-deps */

import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import io from "socket.io-client";
import {Socket} from "socket.io-client";
import {Dashboard} from '../view/dashboard'
import req from 'axios'
import { useRouter } from 'next/dist/client/router';

const Home: NextPage = () => {
const [socket, setSocket] = useState<Socket>(io('https://arthursantos.tech/', { transports: ['websocket', 'polling', 'flashsocket'] }))
const [message, setMessage] = useState<string>('')
const [name, setName] = useState<any>()
const [talks, setTalks] = useState<object[]>([])
const [toggle, setToggle] = useState<any>(true)
const routet = useRouter()


useEffect(() => {
  socket.on('connection', (value) => {
    console.log(value.id)  
  })

  return () => {
    socket.close()
  }
},[])

useEffect(() => {  
  socket.on('send', ({name, message}) => {
    setTalks((talks)=>[...talks, ...[{name:name, message: message}]])
    console.log('state->', talks)
    console.log('payloads->', message, name)
    })
    
}, [])
  


useEffect(() => {
  setName(routet.query.username)
},[])



useEffect(() => {
  async () => await request()
}, [request])

async function request () {
  await req.post('https://arthursantos.tech/messages', {name: name, message: message} ).catch(err=>err)
}

  return (
    <Dashboard req={request} getMessage={setMessage} msg={message} talks={talks} setToggle={setToggle} toggle={toggle}/>
  )
}

export default Home
