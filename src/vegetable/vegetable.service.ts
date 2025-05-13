import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NewVegetable } from './DTO/NewVegetable.dto';
import { UpdateVegetable } from './DTO/UpdateVegetable.dto';
@Injectable()
export class VegetableService {
  constructor(private readonly prisma: PrismaService) {}
  async newvegetable(nv: NewVegetable) {
    return this.prisma.vegetable.create({
      data: nv,
    });
  }

  async editvegetableprice(id: number, price: number) {
    return this.prisma.vegetable.update({
      where: { id: id * 1 },
      data: {
        price: price,
      },
    });
  }

  async editvegetablequantity(id: number, imp: number, exp: number) {
    return this.prisma.vegetable.update({
      where: { id: id * 1 },
      data: {
        import: imp,
        export: exp,
      },
    });
  }

  async getallvegetable() {
    return this.prisma.vegetable.findMany({
      include: {
        sale: true,
        garden: true,
      },
    });
  }

  async getvegetable(id: number) {
    return this.prisma.vegetable.findFirst({
      where: { id: id * 1 },
    });
  }

  async soldout(id: number, quantity: number) {
    const veget = this.prisma.vegetable.findFirst({ where: { id: id * 1 } });
    if ((await veget).import === 0) {
      return 'Không thể bán vì không còn rau!';
    } else if ((await veget).import < quantity) {
      return 'Số lượng bán ra không đủ!';
    } else {
      var imp = (await veget).import - quantity;
      var exp = (await veget).export + quantity;
      await this.prisma.vegetable.update({
        where: { id: id * 1 },
        data: {
          import: imp,
          export: exp,
        },
      });
      return await this.prisma.sale.create({
        data: {
          quantity: quantity,
          total: quantity * (await veget).price,
          vegetableid: id * 1,
          gardenid: (await veget).gardenid,
          time: new Date(),
        },
      });
    }
  }
}
