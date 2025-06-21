import { checkTokenMiddleware } from '../middlwares/checkTokenMiddleware'
import { SupplierController } from '../controllers/SupplierController'
import { SupplierService } from '../services/SupplierService'
import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

const router = Router()
const prisma = new PrismaClient
const supplierService = new SupplierService(prisma)
const supplierController = new SupplierController(supplierService)
//--------------------------------------------------------------------------------

router.post('/create', checkTokenMiddleware, supplierController.create.bind(supplierController))
router.put('/update', checkTokenMiddleware, supplierController.update.bind(supplierController))
router.delete('/delete', checkTokenMiddleware,supplierController.delete.bind(supplierController))


export default router