import { UserController } from '../controllers/UserController'
import { UserService } from '../services/UserService'
import { PrismaClient } from '@prisma/client'
import { Router } from 'express'
import { registerMiddleware } from '../middlwares/registerMiddleware'

const router = Router()
const prisma = new PrismaClient
const userService = new UserService(prisma)
const userController = new UserController(userService)
//--------------------------------------------------------------------------------
router.post('/signup', registerMiddleware, userController.signUp.bind(userController))

export default router