import { createSupplierProductMiddleware } from '../middlwares/createSupplierProductMiddleware'
import { SupplierProductController } from '../controllers/SupplierProductController'
import { SupplierProductService } from '../services/SupplierProductService'
import { checkTokenMiddleware } from '../middlwares/checkTokenMiddleware'
import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

const router = Router()
const prisma = new PrismaClient
const supplierProductService = new SupplierProductService(prisma)
const supplierProductController = new SupplierProductController(supplierProductService)
//--------------------------------------------------------------------------------

router.post('/create', checkTokenMiddleware, createSupplierProductMiddleware, supplierProductController.create.bind(supplierProductController))
router.put('/update', checkTokenMiddleware, supplierProductController.update.bind(supplierProductController))
router.delete('/delete', checkTokenMiddleware, supplierProductController.delete.bind(supplierProductController))

export default router