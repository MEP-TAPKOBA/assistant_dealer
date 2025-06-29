import { ProductInShopService } from "services/ProductInShopService";
import { renderResult } from "../extensions/renderResult";

export class ProductInShopController {
    constructor(public productInShopService: ProductInShopService) {
    }
    async add(req, res) {
        const [status, message] = await this.productInShopService.add(req.body)
        renderResult(res, status, message)
    }
    async update(req, res) {
        const [status, message] = await this.productInShopService.update(req.body)
        renderResult(res, status, message)
    }
    async delete(req, res) {
        const [status, message] = await this.productInShopService.delete(+req.query.id)
        renderResult(res, status, message)
    }
}