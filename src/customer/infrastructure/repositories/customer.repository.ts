import { EntityRepository, Repository } from 'typeorm';

import { CustomerEntity } from '../entities';

@EntityRepository(CustomerEntity)
export class CustomerRepository extends Repository<CustomerEntity> {}
