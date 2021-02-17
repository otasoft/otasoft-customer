import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { RpcException } from '@nestjs/microservices';

import { CustomerRepository } from '@infrastructure/repositories';
import { CustomerEntity } from '@infrastructure/entities';
import { validateDbError } from '@database/helpers';
import { UpdateCustomerProfileCommand } from '../impl';

@CommandHandler(UpdateCustomerProfileCommand)
export class UpdateCustomerProfileHandler
  implements ICommandHandler<UpdateCustomerProfileCommand> {
  constructor(
    @InjectRepository(CustomerRepository)
    private readonly customerRepository: CustomerRepository,
  ) {}

  async execute(
    command: UpdateCustomerProfileCommand,
  ): Promise<CustomerEntity> {
    const { id, updateCustomerProfileData } = command.updateCustomerProfileDto;
    const { first_name, last_name } = updateCustomerProfileData;

    try {
      const updatedCustomer = await this.customerRepository.save({
        id,
        first_name,
        last_name,
      });

      return updatedCustomer;
    } catch (error) {
      const { code, message } = validateDbError(error.code);

      throw new RpcException({
        statusCode: code,
        errorStatus: message,
      });
    }
  }
}
