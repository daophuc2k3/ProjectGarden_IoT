import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interfaces';
import { PrismaService } from 'src/prisma/prisma.service';
import { hashPassword } from 'src/security/hashpassword';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  //Tuần 4
  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: {
        garden: true,
      },
    });
  }

  async getAll() {
    return await this.prisma.user.findMany({
      include: {
        garden: true,
      },
    });
  }

  async findById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        garden: true,
      },
    });
  }

  async create(name: string, email: string, role: string, password: string) {
    return this.prisma.user.create({
      data: {
        name: name,
        email: email,
        role: role,
        password: password,
      },
    });
  }

  async deleteByEmail(email: string) {
    return this.prisma.user.delete({
      where: { email: email },
      include: {
        garden: true,
      },
    });
  }

  async deleteById(Id: number) {
    return this.prisma.user.delete({
      where: { id: Id },
    });
  }

  async updateById(Id: number, name: string, password: string) {
    return this.prisma.user.update({
      where: { id: Id },
      data: {
        name: name,
        password: await hashPassword(password),
      },
    });
  }

  async updateByEmail(email: string, name: string, password: string) {
    return this.prisma.user.update({
      where: { email: email },
      data: {
        name: name,
        password: await hashPassword(password),
      },
    });
  }
  //End tuần 4
}
