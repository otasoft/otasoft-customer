import { GetCustomerProfileDto } from 'src/customer/dto/get-customer-profile.dto';

export class GetCustomerProfileQuery {
  constructor(public readonly getCustomerProfileDto: GetCustomerProfileDto) {}
}
