import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import {
  CreateCustomerProfileCommand,
  RemoveCustomerProfileCommand,
  UpdateCustomerProfileCommand,
} from '../commands/impl';
import {
  CreateCustomerProfileDto,
  RemoveCustomerProfileDto,
  GetCustomerProfileDto,
  UpdateCustomerProfileDto,
} from '../dto';
import { CustomerEntity } from '../../entities';
import { GetCustomerProfileQuery } from '../queries/impl';

@Injectable()
export class CustomerService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async createCustomerProfile(
    createCustomerProfileDto: CreateCustomerProfileDto,
  ): Promise<CustomerEntity> {
    return this.commandBus.execute(
      new CreateCustomerProfileCommand(createCustomerProfileDto),
    );
  }

  async getCustomerProfile(
    getCustomerProfileDto: GetCustomerProfileDto,
  ): Promise<CustomerEntity> {
    return this.queryBus.execute(
      new GetCustomerProfileQuery(getCustomerProfileDto),
    );
  }

  async removeCustomerProfile(
    removeCustomerProfileDto: RemoveCustomerProfileDto,
  ): Promise<Boolean> {
    return this.commandBus.execute(
      new RemoveCustomerProfileCommand(removeCustomerProfileDto),
    );
  }

  async updateCustomerProfile(
    updateCustomerProfileDto: UpdateCustomerProfileDto,
  ): Promise<CustomerEntity> {
    return this.commandBus.execute(
      new UpdateCustomerProfileCommand(updateCustomerProfileDto),
    );
  }
}
