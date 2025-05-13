import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Login } from './DTO/Login.dto';
import { Register } from './DTO/Register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly av: AuthService) {}

  @Post('login')
  async login(@Body() log: Login): Promise<any> {
    return await this.av.login(log.email, log.password);
  }

  @Post('register')
  async register(@Body() regis: Register): Promise<any> {
    return await this.av.register(
      regis.name,
      regis.email,
      regis.role,
      regis.password,
    );
  }
}
