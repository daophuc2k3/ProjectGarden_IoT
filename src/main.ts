import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('Server start at port: 3003');
  const config = new DocumentBuilder().build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.connectMicroservice({
    transport: Transport.MQTT,
    options: {
      url: 'mqtts://32ae6b7356af462f9df4141386bdf71a.s1.eu.hivemq.cloud',
      port: 8883,
      username: 'daophuc2k3',
      password: 'Daophuc2003',
    },
  });

  await app.startAllMicroservices();
  await app.listen(3003);
}
bootstrap();
