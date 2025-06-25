import { PrismaClient, Shop } from "@prisma/client";

export class ShopService {
  constructor(private prisma: PrismaClient) {
  }
  async create(dto): Promise<[number, string]> {
    try {
      await this.prisma.shop.create({ data: dto })
      return [200, 'success']
    } catch (e) { return [500, `${e}`] }
  }
  async update({ id, ...dto }: Partial<Shop>): Promise<[number, string]> {
    try {
      await this.prisma.shop.update({
        where: { id },
        data: dto,
      });
      return [200, 'success'];
    } catch (e) {
      return [500, `${e}`];
    }

  }
  async delete(id: number): Promise<[number, string]> {
    try {
      await this.prisma.shop.delete({
        where: { id },
      });
      return [200, 'success'];
    } catch (e) {
      return [500, `${e}`];
    }
  }
}