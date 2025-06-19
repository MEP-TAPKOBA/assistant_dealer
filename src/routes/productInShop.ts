import { checkTokenMiddleware } from '../middlwares/checkTokenMiddleware'
import { ProductInShopController } from '../controllers/ProductInShopController'
import { ProductInShopService } from '../services/ProductInShopService'
import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

const router = Router()
const prisma = new PrismaClient
const productInShopService = new ProductInShopService(prisma)
const productInShopController = new ProductInShopController(productInShopService)
//--------------------------------------------------------------------------------

router.post('/add', checkTokenMiddleware, productInShopController.add.bind(productInShopController))


export default router