import { checkTokenMiddleware } from '../middlwares/checkTokenMiddleware'
import { UserController } from '../controllers/UserController'
import { AppController } from '../controllers/appController'
import { UserService } from '../services/UserService'
import { AuthService } from '../services/AuthService'
import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

const router = Router()
const prisma = new PrismaClient
const authService = new AuthService(prisma)
const userService = new UserService(prisma)
const appController = new AppController(authService)
const userController = new UserController(userService)
//--------------------------------------------------------------------------------
router.get('/',appController.render.bind(appController))
router.get('/menu',checkTokenMiddleware,userController.renderMenu.bind(userController))

export default router