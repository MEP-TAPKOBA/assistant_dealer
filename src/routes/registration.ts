import { RegistrationController } from '../controllers/RegistrationController'
import { registerMiddleware } from '../middlwares/registerMiddleware'
import { UserService } from '../services/UserService'
import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

const router = Router()
const prisma = new PrismaClient
const userService = new UserService(prisma)

const registrationController = new RegistrationController(userService)
//--------------------------------------------------------------------------------
router.post('/', registerMiddleware, registrationController.signUp.bind(registrationController))
router.get('/', registrationController.render.bind(registrationController))

export default router