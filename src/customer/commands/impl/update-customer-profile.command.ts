import { UpdateCustomerProfileDto } from '../../dto';

export class UpdateCustomerProfileCommand {
  constructor(
    public readonly updateCustomerProfileDto: UpdateCustomerProfileDto,
  ) {}
}
