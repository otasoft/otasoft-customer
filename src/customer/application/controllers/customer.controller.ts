import { Controller, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { CustomerService } from '../services';
import {
  CreateCustomerProfileDto,
  GetCustomerProfileDto,
  RemoveCustomerProfileDto,
  UpdateCustomerProfileDto,
} from '../dto';
import { CustomerEntity, MessageEntity } from '@infrastructure/entities';
import { TextResponseModel } from '@application/models';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @UsePipes(new ValidationPipe())
  @MessagePattern({ role: 'customer', cmd: 'create' })
  async createCustomerProfile(
    @Body() createCustomerProfileDto: CreateCustomerProfileDto,
  ): Promise<CustomerEntity> {
    return this.customerService.createCustomerProfile(createCustomerProfileDto);
  }

  @MessagePattern({ role: 'customer', cmd: 'getCustomerMessages' })
  async getCustomerMessages(id: number): Promise<MessageEntity[]> {
    return this.customerService.getCustomerMessages(id);
  }

  @MessagePattern({ role: 'customer', cmd: 'deleteMessage' })
  async deleteMessage(id: number): Promise<TextResponseModel> {
    return this.customerService.deleteMessage(id);
  }

  @MessagePattern({ role: 'customer', cmd: 'get' })
  async getCustomerProfile(
    @Body() getCustomerProfileDto: GetCustomerProfileDto,
  ): Promise<CustomerEntity> {
    return this.customerService.getCustomerProfile(getCustomerProfileDto);
  }

  @MessagePattern({ role: 'customer', cmd: 'remove' })
  async removeCustomerProfile(
    @Body() removeCustomerProfileDto: RemoveCustomerProfileDto,
  ): Promise<Boolean> {
    return this.customerService.removeCustomerProfile(removeCustomerProfileDto);
  }

  @MessagePattern({ role: 'customer', cmd: 'update' })
  async updateCustomerProfile(
    @Body() updateCustomerProfileDto: UpdateCustomerProfileDto,
  ): Promise<CustomerEntity> {
    return this.customerService.updateCustomerProfile(updateCustomerProfileDto);
  }
}
