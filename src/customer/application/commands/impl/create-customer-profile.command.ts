import { CreateCustomerProfileDto } from '../../dto';

export class CreateCustomerProfileCommand {
  constructor(
    public readonly createCustomerProfileDto: CreateCustomerProfileDto,
  ) {}
}
