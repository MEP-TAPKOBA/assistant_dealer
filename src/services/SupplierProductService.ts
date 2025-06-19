import { PrismaClient, SupplierProduct } from "@prisma/client";

export class SupplierProductService{
    constructor(private prisma:PrismaClient){
    }
    async create(dto:SupplierProduct){
        try {
        const product = await this.prisma.supplierProduct.create({data: dto})
        const supplier = await this.prisma.supplier.findUnique({where:{id:dto.supplierId}})
        return [200, `Товар ${product.name} добавлен успешно к поставщику ${supplier.name}`]
    } catch (e) { return [500, `${e}`] }
    }
}