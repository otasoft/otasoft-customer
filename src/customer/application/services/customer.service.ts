import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import {
  CreateCustomerProfileCommand,
  DeleteMessageCommand,
  RemoveCustomerProfileCommand,
  UpdateCustomerProfileCommand,
} from '../commands/impl';
import {
  CreateCustomerProfileDto,
  RemoveCustomerProfileDto,
  GetCustomerProfileDto,
  UpdateCustomerProfileDto,
} from '../dto';
import { CustomerEntity, MessageEntity } from '@infrastructure/entities';
import { GetCustomerMessagesQuery, GetCustomerProfileQuery } from '../queries/impl';
import { TextResponseModel } from '@application/models';

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

  async getCustomerMessages(id: number): Promise<MessageEntity[]> {
    return this.queryBus.execute(new GetCustomerMessagesQuery(id));
  }

  async deleteMessage(id: number): Promise<TextResponseModel> {
    return this.commandBus.execute(new DeleteMessageCommand(id));
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
