import { Global, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerRepository, MessageRepository } from '@infrastructure/repositories';
import { CommandHandlers } from './commands/handlers';
import { CustomerController } from './controllers';
import { QueryHandlers } from './queries/handlers';
import { CustomerService } from './services';

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([CustomerRepository, MessageRepository]), CqrsModule],
    controllers: [CustomerController],
    providers: [CustomerService, ...CommandHandlers, ...QueryHandlers],
})
export class ApplicationModule {}
