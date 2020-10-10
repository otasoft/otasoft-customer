import { CreateCustomerProfileDto } from 'src/customer/dto/create-customer-profile.dto';

export class CreateCustomerProfileCommand {
  constructor(
    public readonly createCustomerProfileDto: CreateCustomerProfileDto,
  ) {}
}
