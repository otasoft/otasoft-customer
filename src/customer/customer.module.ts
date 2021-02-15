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
import { ApplicationModule } from './application/application.module';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CustomerRepository, CustomerEntity]),
    CqrsModule,
    ApplicationModule,
    DomainModule,
    InfrastructureModule,
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
