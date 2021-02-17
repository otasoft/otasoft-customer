import { RemoveCustomerProfileDto } from '../../dto';

export class RemoveCustomerProfileCommand {
  constructor(
    public readonly removeCustomerProfileDto: RemoveCustomerProfileDto,
  ) {}
}
