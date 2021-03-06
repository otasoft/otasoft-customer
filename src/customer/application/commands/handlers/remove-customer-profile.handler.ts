import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { RpcException } from '@nestjs/microservices';

import { validateDbError } from '@database/helpers';
import { CustomerRepository } from '@infrastructure/repositories';
import { RemoveCustomerProfileCommand } from '../impl';

@CommandHandler(RemoveCustomerProfileCommand)
export class RemoveCustomerProfileHandler
  implements ICommandHandler<RemoveCustomerProfileCommand> {
  constructor(
    @InjectRepository(CustomerRepository)
    private readonly customerRepository: CustomerRepository,
  ) {}

  async execute(command: RemoveCustomerProfileCommand): Promise<Boolean> {
    const { id } = command.removeCustomerProfileDto;
    const customer = await this.customerRepository.findOne(id);

    if (!customer)
      throw new RpcException({
        statusCode: 404,
        errorStatus: `Customer with ID: ${id} not found`,
      });

    try {
      await this.customerRepository.remove(customer);
    } catch (error) {
      const { code, message } = validateDbError(error.code);

      throw new RpcException({
        statusCode: code,
        errorStatus: message,
      });
    }

    return true;
  }
}
