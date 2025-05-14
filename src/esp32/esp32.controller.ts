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

  @MessagePattern('sensor/data')
  async handleESP32data(msg) {
    const ns: NewSensorData = new NewSensorData();
    ns.gardenid = msg.garId;
    ns.humidity = msg.hum;
    ns.temperature = msg.temp;
    const garden = await this.esp32service.getlightstatusGarden(ns.gardenid)
    msg.led1 = garden.led1_status *1 === 1 ? 'on' : 'off';
    msg.led2 = garden.led2_status *1 === 1 ? 'on' : 'off';
    msg.led3 = garden.led3_status *1 === 1 ? 'on' : 'off';
    await this.esp32service.saveSensorData(ns);
    await this.esp32service.handleData(msg);
  }

  @MessagePattern('light/status')
  async handleturnlight(msg) {
    var gardenid = msg.garderID;
    var userid = msg.userId;
    if(msg.led1State != null || msg.led1State != undefined){
      await this.esp32service.updateled1statusGarden(gardenid , userid, msg.led1State)
    }
    
    if(msg.led2State != null || msg.led2State != undefined){
      await this.esp32service.updateled2statusGarden(gardenid , userid, msg.led2State)
    }

    if(msg.led3State != null || msg.led3State != undefined){
      await this.esp32service.updateled3statusGarden(gardenid , userid, msg.led3State)
    }
    const garden = await this.esp32service.getlightstatusGarden(gardenid)
    var led1 = garden.led1_status*1 === 1 ? 'on' : 'off';
    var led2 = garden.led2_status*1 === 1 ? 'on' : 'off';
    var led3 = garden.led3_status*1 === 1 ? 'on' : 'off';
    await this.esp32service.handlelight({
      gardenId: garden.id,
      led1: led1,
      led2: led2,
      led3: led3
    });
  }
}
