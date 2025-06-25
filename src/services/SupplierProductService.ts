import { PrismaClient, SupplierProduct } from "@prisma/client";

export class SupplierProductService {
  constructor(private prisma: PrismaClient) {
  }
  async create(dto: SupplierProduct) {
    try {
      const product = await this.prisma.supplierProduct.create({ data: dto })
      const supplier = await this.prisma.supplier.findUnique({ where: { id: dto.supplierId } })
      return [200, `Товар ${product.name} добавлен успешно к поставщику ${supplier.name}`]
    } catch (e) { return [500, `${e}`] }
  }
  async update({ id, ...dto }: Partial<SupplierProduct>): Promise<[number, string]> {
    try {
      await this.prisma.supplierProduct.update({ where: { id }, data: dto });
      return [200, 'success'];
    } catch (e) {
      return [500, `${e}`];
    }
  }
  async delete(id: number): Promise<[number, string]> {
    try {
      await this.prisma.supplierProduct.delete({
        where: { id },
      });
      return [200, 'success'];
    } catch (e) {
      return [500, `${e}`];
    }
  }
}