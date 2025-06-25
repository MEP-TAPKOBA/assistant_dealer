import { addProductInShopMiddleware } from '../middlwares/addProductInShopMiddleware'
import { ProductInShopController } from '../controllers/ProductInShopController'
import { checkTokenMiddleware } from '../middlwares/checkTokenMiddleware'
import { ProductInShopService } from '../services/ProductInShopService'
import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

const router = Router()
const prisma = new PrismaClient
const productInShopService = new ProductInShopService(prisma)
const productInShopController = new ProductInShopController(productInShopService)
//--------------------------------------------------------------------------------

router.post('/add', checkTokenMiddleware, addProductInShopMiddleware, productInShopController.add.bind(productInShopController))
router.put('/update', checkTokenMiddleware, productInShopController.update.bind(productInShopController))
router.delete('/delete', checkTokenMiddleware, productInShopController.delete.bind(productInShopController))


export default router