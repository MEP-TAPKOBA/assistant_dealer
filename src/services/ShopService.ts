import { PrismaClient } from "@prisma/client";

export class ShopService {
    constructor(private prisma:PrismaClient){
    }
    async create(dto):Promise<[number,string]>{
        try {
        await this.prisma.shop.create({data : dto})
        return [200, 'success']
    } catch (e) { return [500, `${e}`] }
    }
}