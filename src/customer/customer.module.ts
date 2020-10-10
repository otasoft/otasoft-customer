import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { QueryHandlers } from './queries/handlers';
import { CommandHandlers } from './commands/handlers';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerRepository } from './repositories/customer.repository';
import { CustomerEntity } from './repositories/customer.entity';
import { ConfigService } from '@nestjs/config';

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
