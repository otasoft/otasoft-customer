import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

import { CustomerController } from './controllers';
import { CustomerService } from './services';
import { QueryHandlers } from './queries/handlers';
import { CommandHandlers } from './commands/handlers';
import { CustomerRepository } from './repositories';
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
