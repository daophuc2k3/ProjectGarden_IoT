import { Module } from '@nestjs/common';
import { Esp32Service } from './esp32.service';
import { Esp32Controller } from './esp32.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Esp32Gateway } from './esp32.gateway';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        imports: [ConfigModule],
        inject: [ConfigService],
        name: 'ESP32DATA_SERVICE',
        useFactory: async (config: ConfigService) => ({
          transport: Transport.MQTT,
          options: {
            url: config.get<string>('MQTT_URL'),
            port: config.get<number>('MQTT_PORT'),
            username: config.get<string>('MQTT_USERNAME'),
            password: config.get<string>('MQTT_PASSWORD'),
          },
        }),
      },
    ]),
  ],
  exports: [Esp32Service, Esp32Gateway],
  providers: [Esp32Service, Esp32Gateway],
  controllers: [Esp32Controller],
})
export class Esp32Module {}
