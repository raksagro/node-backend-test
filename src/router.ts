import express from 'express'
import { UserController } from './controller/user'

const router = express.Router()

const userController = new UserController

router.get('/user/:id', userController.get)
router.post('/user', userController.create)
router.put('/user', userController.update)
router.delete('/user/:id', userController.delete)




export default router