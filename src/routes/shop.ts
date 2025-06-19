import { checkTokenMiddleware } from '../middlwares/checkTokenMiddleware'
import { ShopController } from '../controllers/ShopController'
import { ShopService } from '../services/ShopService'
import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

const router = Router()
const prisma = new PrismaClient
const shopService = new ShopService(prisma)
const shopController = new ShopController(shopService)
//--------------------------------------------------------------------------------

router.post('/create', checkTokenMiddleware, shopController.create.bind(shopController))

export default router