import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';

import { GetCustomerProfileQuery } from '../impl';
import { CustomerRepository } from '../../../repositories';
import { CustomerEntity } from '../../../entities';

@QueryHandler(GetCustomerProfileQuery)
export class GetCustomerProfileHandler
  implements IQueryHandler<GetCustomerProfileQuery> {
  constructor(
    @InjectRepository(CustomerRepository)
    private readonly customerRepository: CustomerRepository,
  ) {}

  async execute(query: GetCustomerProfileQuery): Promise<CustomerEntity> {
    const id = query.getCustomerProfileDto;
    const customer = await this.customerRepository.findOne(id);

    if (!customer)
      throw new RpcException({
        statusCode: 404,
        errorStatus: `Customer with ID: ${id} not found`,
      });

    return customer;
  }
}
