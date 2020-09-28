import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCustomerProfileCommand, RemoveCustomerProfileCommand } from './commands/impl';
import { CreateCustomerProfileDto } from './dto/create-customer-profile.dto';
import { GetCustomerProfileDto } from './dto/get-customer-profile.dto';
import { CustomerEntity } from './repositories/customer.entity';
import { GetCustomerProfileQuery } from './queries/impl';
import { RemoveCustomerProfileDto } from './dto/remove-customer-profile.dto';

@Injectable()
export class CustomerService {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    async createCustomerProfile(createCustomerProfileDto: CreateCustomerProfileDto): Promise<CustomerEntity> {
        return this.commandBus.execute(new CreateCustomerProfileCommand(createCustomerProfileDto));
    }

    async getCustomerProfile(getCustomerProfileDto: GetCustomerProfileDto): Promise<CustomerEntity> {
        return this.queryBus.execute(new GetCustomerProfileQuery(getCustomerProfileDto));
    }

    async removeCustomerProfile(removeCustomerProfileDto: RemoveCustomerProfileDto): Promise<Boolean> {
        return this.commandBus.execute(new RemoveCustomerProfileCommand(removeCustomerProfileDto));
    }
}
