import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { Esp32Module } from './esp32/esp32.module';

@Module({
  imports: [
    ConfigModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    Esp32Module,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
