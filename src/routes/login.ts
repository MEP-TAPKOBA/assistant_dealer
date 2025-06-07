
import { AuthController } from '../controllers/AuthController'
import { AuthService } from '../services/AuthService'
import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

const router = Router()
const prisma = new PrismaClient
const authService = new AuthService(prisma)
const authController = new AuthController(authService)
//--------------------------------------------------------------------------------
router.post('/', authController.login.bind(authController))

export default router