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
import { UserService } from './user.service';
import { NewUser } from './DTO/NewUser.dto';
import { EditUser } from './DTO/EditUser.dto';
import { Roles } from 'src/auth/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('users')
export class UserController {
  //controller tuần 1
  constructor(private readonly sv: UserService) {}

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('alluser')
  @Roles('admin')
  async alluser(): Promise<any[]> {
    console.log('getall');
    return await this.sv.getAll();
  }
}
