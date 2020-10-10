import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerRepository } from 'src/customer/repositories/customer.repository';
import { RpcException } from '@nestjs/microservices';
import { UpdateCustomerProfileCommand } from '../impl/update-customer-profile.command';

@CommandHandler(UpdateCustomerProfileCommand)
export class UpdateCustomerProfileHandler
  implements ICommandHandler<UpdateCustomerProfileCommand> {
  constructor(
    @InjectRepository(CustomerRepository)
    private readonly customerRepository: CustomerRepository,
  ) {}

  async execute(command: UpdateCustomerProfileCommand) {
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
      throw new RpcException(error);
    }
  }
}
