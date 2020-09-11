import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCustomerProfileCommand } from './commands/impl';
import { CreateCustomerProfileDto } from './dto/create-customer-profile.dto';
import { GetCustomerProfileDto } from './dto/get-customer-profile.dto';
import { CustomerEntity } from './repositories/customer.entity';
import { GetCustomerProfileQuery } from './queries/impl';

@Injectable()
export class CustomerService {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    async createCustomerProfile(createCustomerProfileDto: CreateCustomerProfileDto): Promise<void> {
        return this.commandBus.execute(new CreateCustomerProfileCommand(createCustomerProfileDto));
    }

    async getCustomerProfile(getCustomerProfileDto: GetCustomerProfileDto): Promise<CustomerEntity> {
        return this.queryBus.execute(new GetCustomerProfileQuery(getCustomerProfileDto));
    }
}
