import { Controller, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateCustomerProfileDto } from './dto/create-customer-profile.dto';
import { CustomerEntity } from './repositories/customer.entity';
import { GetCustomerProfileDto } from './dto/get-customer-profile.dto';

@Controller('customer')
export class CustomerController {
    constructor(
        private readonly customerService: CustomerService,
    ) {}

    @UsePipes(new ValidationPipe())
    @MessagePattern({ role: 'customer', cmd: 'create' })
    async createCustomerProfile(@Body() createCustomerProfileDto: CreateCustomerProfileDto): Promise<void> {
        return this.customerService.createCustomerProfile(createCustomerProfileDto);
    }

    @MessagePattern({ role: 'customer', cmd: 'get' })
    async getCustomerProfile(@Body() getCustomerProfileDto: GetCustomerProfileDto): Promise<CustomerEntity> {
        return this.customerService.getCustomerProfile(getCustomerProfileDto);
    }
}
