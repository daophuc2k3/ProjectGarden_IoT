import { Body, Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from './auth/roles.guard';
import { Request } from 'express';
import { Roles } from './auth/roles.decorator';

@Controller()
export class AppController {
  constructor(private readonly appservice: AppService) {}

  @Get()
  getHello(): string {
    return this.appservice.getHello();
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Get('price')
  async getprice(@Req() req: Request, @Body('year') year: number): Promise<any> {
    const user = req.user as { userId: number; role: string };

    if (user.role === 'admin') {
      return await this.appservice.getprice(year);
    }else{
      return await this.appservice.getpriceBaseUser(year, user.userId);
    }

  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Get('all/price')
  async getpriceall(@Req() req: Request): Promise<any[]> {
    const user = req.user as { userId: number; role: string };
    if (user.role === 'admin') {
      return await this.appservice.getpriceall();
    }else{
      return await this.appservice.getpriceallBaseUser(user.userId);
    }
  }
}
