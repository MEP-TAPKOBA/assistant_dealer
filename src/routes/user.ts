import { checkTokenMiddleware } from '../middlwares/checkTokenMiddleware'
import { UserController } from '../controllers/UserController'
import { UserService } from '../services/UserService'
import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

const router = Router()
const prisma = new PrismaClient
const userService = new UserService(prisma)
const userController = new UserController(userService)
//--------------------------------------------------------------------------------

router.post('/info', checkTokenMiddleware, userController.get.bind(userController))
router.post('/switch-password', checkTokenMiddleware, userController.switchPassword.bind(userController))


export default router