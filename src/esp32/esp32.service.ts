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

  async getlightstatusGarden(id){
     return await this.prisma.garden.findFirst({
      where : {id: id *1}
    });
  }

  async updateled1statusGarden(id, uid, led1){
     return await this.prisma.garden.update({
      where : {id: id *1, userid: uid*1 },
      data: {
        led1_status : led1*1
      }
    });
  }

  async updateled2statusGarden(id, uid, led2){
     return await this.prisma.garden.update({
      where : {id: id *1, userid: uid*1 },
      data: {
        led2_status : led2*1
      }
    });
  }
  
  async updateled3statusGarden(id, uid, led3){
     return await this.prisma.garden.update({
      where : {id: id *1, userid: uid*1 },
      data: {
        led3_status : led3*1
      }
    });
  }
}
