import { Transport } from "@nestjs/microservices";

export const customerMicroserviceOptions = {
    transport: Transport.RMQ,
    options: {
      urls: [
        `amqp://${process.env.RABBITMQ_DEFAULT_USER}:${process.env.RABBITMQ_DEFAULT_PASS}@localhost:${process.env.RABBITMQ_FIRST_HOST_PORT}/${process.env.RABBITMQ_DEFAULT_VHOST}` 
      ],
      queue: 'customer_queue',
      queueOptions: {
        durable: false,
      }
    }
  }