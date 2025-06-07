import { checkTokenMiddleware } from '../middlwares/checkTokenMiddleware'
import { RegistrationController } from '../controllers/RegistrationController'
import { registerMiddleware } from '../middlwares/registerMiddleware'
import { UserController } from '../controllers/UserController'
import { UserService } from '../services/UserService'
import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

const router = Router()
const prisma = new PrismaClient
const userService = new UserService(prisma)
const userController = new UserController(userService)
const registrationController = new RegistrationController(userService)
//--------------------------------------------------------------------------------
router.post('/', registerMiddleware, registrationController.signUp.bind(registrationController))
router.post('/info',checkTokenMiddleware,userController.get.bind(userController))

export default router