import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { customerMicroserviceOptions } from './microservice-connection/microservice-connection';

const logger = new Logger('CustomerMicroservice')

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, customerMicroserviceOptions);

  await app.listen(() => {
    logger.log('Microservice is listening')
  });
}
bootstrap();
