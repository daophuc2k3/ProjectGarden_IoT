import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NewGarden } from './DTO/NewGarden.dto';
import { UpdateGarden } from './DTO/UpdateGarden.dto';
@Injectable()
export class GardenService {
  constructor(private readonly prisma: PrismaService) {}
  async newgarden(idu: number, ng: NewGarden) {
    return this.prisma.garden.create({
      data: {
        name: ng.name,
        userid: idu,
      },
    });
  }

  async editgarden(id: number, up: UpdateGarden) {
    return this.prisma.garden.update({
      where: { id: id * 1 },
      data: up,
    });
  }

  async deleteGarden(id: number) {
    return this.prisma.garden.delete({
      where: { id: id * 1 },
    });
  }

  async getgarden(id: number) {
    return this.prisma.garden.findFirst({
      where: { id: id * 1 },
      include: {
        user: true,
        vegetable: true,
        sale: true,
        sensorData: true,
      },
    });
  }

  async getgardenByUserId(id: number) {
    return this.prisma.garden.findMany({
      where: { userid: id * 1 },
      include: {
        user: true,
        vegetable: true,
        sale: true,
        sensorData: true,
      },
    });
  }

  async getallgarden() {
    return this.prisma.garden.findMany({
      include: {
        user: true,
        vegetable: true,
        sale: true,
        sensorData: true,
      },
    });
  }
}
