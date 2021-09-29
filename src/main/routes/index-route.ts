import {Router} from 'express'
import { auth } from '../middlewares/authentication'

export default (router: Router) => {
  router.get('/', auth, (req, res) => {
    res.json({message: 'hello world'})
  })
}