import {Router} from 'express'
import { Server } from 'socket.io'
import { auth } from '../middlewares/authentication'

export default (router: Router) => {
  router.get('/', auth, (req, res) => {
    return res.json({private: 'hello'})
  })
}