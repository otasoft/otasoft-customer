import { RemoveCustomerProfileCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerRepository } from 'src/customer/repositories/customer.repository';
import { RpcException } from '@nestjs/microservices';

@CommandHandler(RemoveCustomerProfileCommand)
export class RemoveCustomerProfileHandler
  implements ICommandHandler<RemoveCustomerProfileCommand> {
  constructor(
    @InjectRepository(CustomerRepository)
    private readonly customerRepository: CustomerRepository,
  ) {}

  async execute(command: RemoveCustomerProfileCommand) {
    const id = command.removeCustomerProfileDto;

    try {
      const customer = await this.customerRepository.findOne(id);
      await this.customerRepository.remove(customer);
    } catch (error) {
      throw new RpcException(
        `Problem occured when removing a customer profile: ${error}`,
      );
    }

    return true;
  }
}
