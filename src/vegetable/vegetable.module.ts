import { Module } from '@nestjs/common';
import { VegetableService } from './vegetable.service';
import { VegetableController } from './vegetable.controller';

@Module({
  exports: [VegetableService],
  providers: [VegetableService],
  controllers: [VegetableController],
})
export class VegetableModule {}
