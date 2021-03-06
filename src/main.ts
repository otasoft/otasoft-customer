import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

const logger = new Logger('CustomerMicroservice');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        `amqp://${process.env.RABBITMQ_DEFAULT_USER}:${process.env.RABBITMQ_DEFAULT_PASS}@${process.env.RABBITMQ_NODENAME}:${process.env.RABBITMQ_FIRST_HOST_PORT}/${process.env.RABBITMQ_DEFAULT_VHOST}`,
      ],
      queue: 'customer_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.listen(() => {
    logger.log('Microservice is listening');
  });
}
bootstrap();
