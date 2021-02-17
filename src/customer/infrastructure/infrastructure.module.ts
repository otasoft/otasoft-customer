import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerEntity, MessageEntity } from './entities';
import { CustomerRepository, MessageRepository } from './repositories';

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([CustomerRepository, CustomerEntity, MessageRepository, MessageEntity])]
})
export class InfrastructureModule {}
