import { PrismaClient, Supplier } from "@prisma/client";

export class SupplierService {
    constructor(private prisma: PrismaClient){
    }
    async create(dto: Supplier): Promise<[number,string]> {
        try {
            await this.prisma.supplier.create({data : dto})
            return [200, 'success']
        } catch (e) { return [500, `${e}`] }
        
    }
    async hideOrShow(id): Promise <[number,string]>{
        const thisSupplier = await this.prisma.supplier.findUnique({where: {id:id}})
        const newValue = !thisSupplier.hidden
        await this.prisma.supplier.update({where: {id:thisSupplier.id},data:{hidden:newValue}})
        return [200, newValue? 'supplier hidden' : 'supplier unhidden']
    }
}