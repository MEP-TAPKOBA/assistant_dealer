import { RegistrationController } from '../controllers/RegistrationController'
import { checkTokenMiddleware } from '../middlwares/checkTokenMiddleware'
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
router.post('/registration', registerMiddleware, registrationController.signUp.bind(registrationController))
router.post('/info', checkTokenMiddleware, userController.get.bind(userController))
router.post('/switch-password',checkTokenMiddleware,userController.switchPassword.bind(userController))
router.get('/menu',checkTokenMiddleware,userController.renderMenu.bind(userController))

export default router