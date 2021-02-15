import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerEntity } from './entities';
import { CustomerRepository } from './repositories';

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([CustomerRepository, CustomerEntity])]
})
export class InfrastructureModule {}
