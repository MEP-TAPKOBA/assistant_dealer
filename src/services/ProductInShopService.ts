import { PrismaClient, ProductInShop } from "@prisma/client";

export class ProductInShopService{
    constructor(private prisma:PrismaClient){}
    async add(dto:ProductInShop):Promise<[number,string]>{
        try {
        const thisproductInShop = await this.prisma.productInShop.create({data:dto})
        return [200, 'success']
    } catch (e) { return [500, `${e}`] }
    }
}