import { ProductInShopService } from "services/ProductInShopService";

export class ProductInShopController {
    constructor(public productInShopService: ProductInShopService) {
    }
    async add(req, res) {
        const [status, message] = await this.productInShopService.add(req.body)
        res.status(status).json({ message })
    }
    async update(req, res) {
        const [status, message] = await this.productInShopService.update(req.body)
        res.status(status).json({ message })
    }
    async delete(req, res) {
        const [status, message] = await this.productInShopService.delete(+req.query.id)
        res.status(status).json({ message })
    }
}