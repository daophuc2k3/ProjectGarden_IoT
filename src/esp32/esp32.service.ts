// mqtt.service.ts
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { Esp32Gateway } from './esp32.gateway';
import { NewSensorData } from './DTO/NewSensorData.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class Esp32Service {
  constructor(
    @Inject('ESP32DATA_SERVICE') private client: ClientProxy,
    private readonly esp32gateway: Esp32Gateway,
    private readonly prisma: PrismaService,
  ) {}
  async handleData(data) {
    this.esp32gateway.handleSend(data);
    await this.client.emit('sensor/response', 'receive').toPromise();
  }

  async handlelight(data) {
    this.esp32gateway.handleSend(data);
    await this.client.emit('light/response', data).toPromise();
  }

  async saveSensorData(ns: NewSensorData) {
    return await this.prisma.sensorData.create({
      data: {
        ...ns,
        time: new Date(),
      },
    });
  }
}
