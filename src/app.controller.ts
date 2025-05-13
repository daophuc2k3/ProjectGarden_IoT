import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from './auth/roles.guard';
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
  async getprice(@Body('year') year: number): Promise<any> {
    return await this.appservice.getprice(year);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Get('all/price')
  async getpriceall(): Promise<any[]> {
    return await this.appservice.getpriceall();
  }
}
