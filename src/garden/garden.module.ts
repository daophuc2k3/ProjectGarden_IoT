import { Module } from '@nestjs/common';
import { GardenController } from './garden.controller';
import { GardenService } from './garden.service';

@Module({
  controllers: [GardenController],
  providers: [GardenService],
  exports: [GardenService],
})
export class GardenModule {}
