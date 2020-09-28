import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetCustomerProfileQuery } from '../impl';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerRepository } from 'src/customer/repositories/customer.repository';

@QueryHandler(GetCustomerProfileQuery)
export class GetCustomerProfileHandler implements IQueryHandler<GetCustomerProfileQuery>{
    constructor(
        @InjectRepository(CustomerRepository)
        private readonly customerRepository: CustomerRepository
        ) {}

    async execute(query: GetCustomerProfileQuery) {
        const id = query.getCustomerProfileDto;
        const user = await this.customerRepository.findOne({ where: { id } })

        if (!user) {
            throw new RpcException('User does not exist')
        }

        return user;
    }
}