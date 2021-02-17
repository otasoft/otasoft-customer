import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { RpcException } from '@nestjs/microservices';

import { CustomerRepository } from '@infrastructure/repositories';
import { CustomerEntity } from '@infrastructure/entities';
import { validateDbError } from '@database/helpers';
import { CreateCustomerProfileCommand } from '../impl';

@CommandHandler(CreateCustomerProfileCommand)
export class CreateCustomerProfileHandler
  implements ICommandHandler<CreateCustomerProfileCommand> {
  constructor(
    @InjectRepository(CustomerRepository)
    private readonly customerRepository: CustomerRepository,
  ) {}

  async execute(
    command: CreateCustomerProfileCommand,
  ): Promise<CustomerEntity> {
    const customer = await this.customerRepository.create({
      ...command.createCustomerProfileDto,
    });

    try {
      await this.customerRepository.save(customer);

      return customer;
    } catch (error) {
      const { code, message } = validateDbError(error.code);

      throw new RpcException({
        statusCode: code,
        errorStatus: message,
      });
    }
  }
}
