import { UpdateCustomerProfileDto } from "src/customer/dto/update-customer-profile.dto";

export class UpdateCustomerProfileCommand {
    constructor(
        public readonly updateCustomerProfileDto: UpdateCustomerProfileDto,
    ) {}
}