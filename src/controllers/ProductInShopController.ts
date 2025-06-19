import { ProductInShopService } from "services/ProductInShopService";

export class ProductInShopController{
    constructor(public productInShopService:ProductInShopService){}
    async add(req, res){
        const [status,message] = await this.productInShopService.add(req.body)
        res.status(status).json({message})
    }
}