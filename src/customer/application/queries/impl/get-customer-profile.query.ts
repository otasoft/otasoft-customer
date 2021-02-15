import { GetCustomerProfileDto } from '../../dto';

export class GetCustomerProfileQuery {
  constructor(public readonly getCustomerProfileDto: GetCustomerProfileDto) {}
}
