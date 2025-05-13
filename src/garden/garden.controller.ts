import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/auth/roles.decorator';
import { GardenService } from './garden.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/roles.guard';
import { Request } from 'express';
import { UpdateGarden } from './DTO/UpdateGarden.dto';
import { NewGarden } from './DTO/NewGarden.dto';

@Controller('garden')
export class GardenController {
  constructor(private readonly gardenservice: GardenService) {}

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Post()
  async createNewGarden(
    @Req() req: Request,
    @Body() ng: NewGarden,
  ): Promise<any> {
    const user = req.user as { userId: number; role: string };
    return await this.gardenservice.newgarden(user.userId, ng);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Get()
  async getAllGarden(@Req() req: Request): Promise<any[]> {
    const user = req.user as { userId: number; role: string };
    if (user.role === 'admin') return await this.gardenservice.getallgarden();
    return await this.gardenservice.getgardenByUserId(user.userId);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Get(':id')
  async getGardenById(
    @Req() req: Request,
    @Param('id') id: number,
  ): Promise<any> {
    const user = req.user as { userId: number; role: string };
    if (user.role === 'admin') {
      return await this.gardenservice.getgarden(id);
    }
    const garden = this.gardenservice.getgarden(id);
    if ((await garden).userid === user.userId) {
      return this.gardenservice.getgarden(id);
    } else {
      return 'Khu vườn này không phải của bạn!';
    }
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Put(':id')
  async updateGarden(
    @Req() req: Request,
    @Param('id') id: number,
    @Body() update: UpdateGarden,
  ): Promise<any> {
    const user = req.user as { userId: number; role: string };
    if (user.role === 'admin') {
      await this.gardenservice.editgarden(id, update);
      return 'Cập nhật khu vườn thành công!';
    }

    const garden = this.gardenservice.getgarden(id);
    if ((await garden).id === user.userId) {
      await this.gardenservice.editgarden(id, update);
      return 'Cập nhật khu vườn thành công!';
    }
    return 'Khu vườn không phải của bạn!';
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Delete(':id')
  async deleteGarden(
    @Req() req: Request,
    @Param('id') id: number,
  ): Promise<any> {
    const user = req.user as { userId: number; role: string };
    if (user.role === 'admin') {
      await this.gardenservice.deleteGarden(id);
      return 'Đã xóa khu vườn thành công!';
    }
    const garden = this.gardenservice.getgarden(id);
    if ((await garden).id === user.userId) {
      await this.gardenservice.deleteGarden(id);
      return 'Xóa khu vườn thành công!';
    }
    return 'Khu vườn không phải của bạn!';
  }
}
