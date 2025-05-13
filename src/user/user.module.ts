import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
// import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  //module tuần 1
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
