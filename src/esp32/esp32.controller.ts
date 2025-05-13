import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  MqttContext,
  Payload,
} from '@nestjs/microservices';
import { Esp32Service } from './esp32.service';
import { NewSensorData } from './DTO/NewSensorData.dto';

@Controller('esp32')
export class Esp32Controller {
  constructor(private readonly esp32service: Esp32Service) {}

  lightstatus = true;

  @MessagePattern('sensor/data')
  async handleESP32data(msg) {
    const ns: NewSensorData = new NewSensorData();
    ns.gardenid = msg.garId;
    ns.humidity = msg.hum;
    ns.temperature = msg.temp;
    msg.light = this.lightstatus === true ? 'on' : 'off';
    await this.esp32service.saveSensorData(ns);
    await this.esp32service.handleData(msg);
  }

  @MessagePattern('light/status')
  async handleturnlight(msg) {
    if (msg.light * 1 === 1) {
      this.lightstatus = true;
    } else {
      this.lightstatus = false;
    }
    await this.esp32service.handlelight({
      light: this.lightstatus === true ? 'on' : 'off',
    });
  }
}
