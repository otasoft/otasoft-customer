import { CqrsModule } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [CustomerService],
    }).compile();

    service = module.get<CustomerService>(CustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
