import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NewVegetable } from './DTO/NewVegetable.dto';
import { UpdateVegetable } from './DTO/UpdateVegetable.dto';
@Injectable()
export class VegetableService {
  constructor(private readonly prisma: PrismaService) {}

  async newVegetableCheckGarden(idu, nv: NewVegetable){
    var garden = await this.prisma.garden.findFirst({
      where : {userid : idu*1, id: nv.gardenid*1}
    })
    if(garden !== null ){
      try{
        var res = await this.prisma.vegetable.create({
          data: nv,
        });
        return res
      }catch(ex){
        console.log(ex)
        return null
      }

    }else{
      return null;
    }
  }

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

  async editvegetablepriceBaseUser(id: number, price: number, idu) {
    const garden = await this.prisma.garden.findMany({
      where: {userid: idu*1}
    })

    if(garden !== null){
      var ids = []
      for (var g of garden){
        ids.push(g.id);
      }
    }

    var veget = await this.prisma.vegetable.findFirst({
      where : {id : id*1 ,gardenid : {
        in: ids
      }}
    })

    if(veget !== null){
      return await this.prisma.vegetable.update({
        where: { id: id * 1 },
        data: {
          price: price,
        },
      });
    }else{
      return null;
    }

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

  async editvegetablequantityBaseUser(id: number, imp: number, exp: number, idu) {
    const garden = await this.prisma.garden.findMany({
      where: {userid: idu*1}
    })

    if(garden !== null){
      var ids = []
      for (var g of garden){
        ids.push(g.id);
      }

      var veget = await this.prisma.vegetable.findFirst({
        where : {id : id*1 ,gardenid : {
          in: ids
        }}
      })

      if(veget !== null){
        var res = await this.prisma.vegetable.update({
          where: { id: id * 1 },
          data: {
            import: imp,
            export: exp,
          },
        });
        return res;
      }else{
        return null;
      }
    }else{
      return null;
    }

  }

  async getallvegetable() {
    return this.prisma.vegetable.findMany({
      include: {
        sale: true,
        garden: true,
      },
    });
  }

  async getallvegetablebaseuser(idu) {
    var garden = await this.prisma.garden.findMany(
      {
        where : {userid : idu*1}
      }
    )

    var ids = []

    for (var g of garden){
      ids.push(g.id);
    }

    return this.prisma.vegetable.findMany({
      where: {gardenid : {in : ids} },
    });
  }

  async getvegetable(id: number) {
    return this.prisma.vegetable.findFirst({
      where: { id: id * 1 },
    });
  }

  async getvegetableBaseUser(id: number, idu) {
     var garden = await this.prisma.garden.findMany(
      {
        where : {userid : idu*1}
      }
    )

    var ids = []

    for (var g of garden){
      ids.push(g.id);
    }

    return this.prisma.vegetable.findFirst({
      where: { id: id * 1, gardenid: {in: ids} },
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

  async soldoutBaseUser(id: number, quantity: number, idu) {
    var garden = await this.prisma.garden.findMany(
      {
        where : {userid : idu*1}
      }
    )

    var ids = []

    for (var g of garden){
      ids.push(g.id);
    }

    const veget = this.prisma.vegetable.findFirst({ where: { id: id * 1, gardenid: {in: ids} } });
    if (veget === null){
      return null;
    }
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
