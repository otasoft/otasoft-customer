import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { QueryHandlers } from './queries/handlers';
import { CommandHandlers } from './commands/handlers';

@Module({
  controllers: [CustomerController],
  providers: [
    CustomerService,
    ...QueryHandlers,
    ...CommandHandlers
  ]
})
export class CustomerModule {}
