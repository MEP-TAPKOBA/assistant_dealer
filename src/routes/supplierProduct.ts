import { checkTokenMiddleware } from '../middlwares/checkTokenMiddleware'
import { SupplierProductController } from '../controllers/SupplierProductController'
import { SupplierProductService } from '../services/SupplierProductService'
import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

const router = Router()
const prisma = new PrismaClient
const supplierProductService = new SupplierProductService(prisma)
const supplierProductController = new SupplierProductController(supplierProductService)
//--------------------------------------------------------------------------------

router.post('/create', checkTokenMiddleware, supplierProductController.create.bind(supplierProductController))


export default router