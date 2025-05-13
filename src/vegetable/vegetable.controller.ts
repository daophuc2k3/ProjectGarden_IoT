import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { VegetableService } from './vegetable.service';
import { NewVegetable } from './DTO/NewVegetable.dto';
import { Roles } from 'src/auth/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('vegetable')
export class VegetableController {
  constructor(private readonly vegetableservice: VegetableService) {}

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Post()
  async create(@Body() nv: NewVegetable) {
    if (nv.import < nv.export) {
      return 'Số lượng nhập phải lớn hơn số lượng xuất!';
    }
    return this.vegetableservice.newvegetable(nv);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Get()
  async getall() {
    return this.vegetableservice.getallvegetable();
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Put(':id')
  async updatequantity(
    @Param('id') id: number,
    @Body('import') imp: number,
    @Body('export') exp: number,
  ) {
    return this.vegetableservice.editvegetablequantity(id, imp, exp);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Get(':id/price')
  async getprice(@Param('id') id: number) {
    const veget = this.vegetableservice.getvegetable(id);
    return (await veget).price;
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Post(':id/price')
  async newprice(@Param('id') id: number, @Body('price') price: number) {
    return this.vegetableservice.editvegetableprice(id, price);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Put(':id/price')
  async updateprice(@Param('id') id: number, @Body('price') price: number) {
    return this.vegetableservice.editvegetableprice(id, price);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Delete(':id/price')
  async deleteprice(@Param('id') id: number) {
    return this.vegetableservice.editvegetableprice(id, 0);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'user')
  @Post(':id/sold')
  async soldout(
    @Param('id') id: number,
    @Body('sold') sold: number,
  ): Promise<any> {
    return this.vegetableservice.soldout(id, sold);
  }
}
