import { RemoveCustomerProfileDto } from 'src/customer/dto/remove-customer-profile.dto';

export class RemoveCustomerProfileCommand {
  constructor(
    public readonly removeCustomerProfileDto: RemoveCustomerProfileDto,
  ) {}
}
