import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { QueryHandlers } from './queries/handlers';
import { CommandHandlers } from './commands/handlers';
import { CustomerRepository } from './repositories/customer.repository';
import { CustomerEntity } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([CustomerRepository, CustomerEntity]),
    CqrsModule,
  ],
  controllers: [CustomerController],
  providers: [
    CustomerService,
    ConfigService,
    ...QueryHandlers,
    ...CommandHandlers,
  ],
})
export class CustomerModule {}
