import {
  Body,
  Controller,
  Delete,
  Get,
  Req,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { VegetableService } from './vegetable.service';
import { NewVegetable } from './DTO/NewVegetable.dto';
import { Roles } from 'src/auth/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('vegetable')
export class VegetableController {
  constructor(private readonly vegetableservice: VegetableService) {}

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Post()
  async create(   
    @Req() req: Request,
    @Body() nv: NewVegetable
  ) {
    const user = req.user as { userId: number; role: string };
    if (nv.import < nv.export) {
        return 'Số lượng nhập phải lớn hơn số lượng xuất!';
      }
    if (user.role === 'admin') {
      
      return this.vegetableservice.newvegetable(nv);
    }else{
      var res = await this.vegetableservice.newVegetableCheckGarden(user.userId,nv);
      if(res !== null){
        return res
      }else{
        return "Khu vườn không thuộc sở hữu của bạn!"
      }
    }
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Get()
  async getall(   
    @Req() req: Request,
  ) {
    const user = req.user as { userId: number; role: string };
    if (user.role === 'admin') {
      return this.vegetableservice.getallvegetable();
    }else{
      return this.vegetableservice.getallvegetablebaseuser(user.userId);
    }
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Put(':id') //
  async updatequantity(
    @Req() req: Request,
    @Param('id') id: number,
    @Body('import') imp: number,
    @Body('export') exp: number,
  ) {
    const user = req.user as { userId: number; role: string };
    if (user.role === 'admin') {
      return await this.vegetableservice.editvegetablequantity(id, imp, exp);
    }else{
      var res = await this.vegetableservice.editvegetablequantityBaseUser(id, imp, exp, user.userId);
      if(res !== null){
        return res;
      }else{ 
        return "Rau này không phải của bạn!"
      }
    }
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Get(':id/price')
  async getprice(@Req() req: Request,@Param('id') id: number) {
    const user = req.user as { userId: number; role: string };
    if (user.role === 'admin') {
      const veget = this.vegetableservice.getvegetable(id);
      return (await veget).price;
    }else{
      const veget = this.vegetableservice.getvegetable(id);
      if(veget !== null){
        return (await veget).price;
      }else{
        return "Rau này không phải của bạn!"
      }
    }
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Post(':id/price')
  async newprice(@Req() req: Request, @Param('id') id: number, @Body('price') price: number) {
    const user = req.user as { userId: number; role: string };
    if (user.role === 'admin') {
      return this.vegetableservice.editvegetableprice(id, price);
    }else{
      const veget = await this.vegetableservice.editvegetablepriceBaseUser(id, price, user.userId);
      if(veget !== null){
        return veget;
      }else{
        return "Rau này không phải của bạn!"
      }
    }
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Put(':id/price')
  async updateprice(@Req() req: Request, @Param('id') id: number, @Body('price') price: number) {
    const user = req.user as { userId: number; role: string };
    if (user.role === 'admin') {
      return await this.vegetableservice.editvegetableprice(id, price);
    }else{
      const veget = await this.vegetableservice.editvegetablepriceBaseUser(id, price, user.userId);
      if(veget !== null){
        return veget;
      }else{
        return "Rau này không phải của bạn!"
      }
    }
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Delete(':id/price')
  async deleteprice(@Req() req: Request, @Param('id') id: number) {
        const user = req.user as { userId: number; role: string };
    if (user.role === 'admin') {
      return this.vegetableservice.editvegetableprice(id, 0);
    }else{
      const veget = this.vegetableservice.editvegetablepriceBaseUser(id, 0, user.userId);
      if(veget !== null){
        return veget;
      }else{
        return "Rau này không phải của bạn!"
      }
    }
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Post(':id/sold')
  async soldout(
    @Req() req: Request,
    @Param('id') id: number,
    @Body('sold') sold: number,
  ): Promise<any> {
    const user = req.user as { userId: number; role: string };
    if (user.role === 'admin') {
      return this.vegetableservice.soldout(id, sold);
    }else{
      const veget = this.vegetableservice.soldoutBaseUser(id, sold, user.userId);
      if(veget !== null){
        return veget;
      }else{
        return "Rau này không phải của bạn!"
      }
    }
  }
}
