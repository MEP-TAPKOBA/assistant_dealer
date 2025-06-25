import { productInShopValidator } from "../shared/validators/product.in.shop.validator"
import { ProductInShopDto } from "../shared/dto/shop/product-in-shop.dto"


export function addProductInShopMiddleware(req, res, next) {
    const dto: ProductInShopDto = req.body
    const errors = productInShopValidator(dto)
    if (errors) {
        const err = errors.join('\n')
        res.status(400).json({ message: err })
        return
    }
    next()
}