import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { hashPassword, comparePasswords } from 'src/security/hashpassword';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findByEmail(email);
    if (user !== null) {
      const comp = await comparePasswords(password, user.password);
      if (!comp) {
        throw new UnauthorizedException();
      } else {
        const payload = {
          sub: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      }
    } else {
      throw new UnauthorizedException();
    }
  }

  async register(
    name: string,
    email: string,
    role: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.create(
      name,
      email,
      role,
      await hashPassword(password),
    );
    const payload = {
      sub: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
