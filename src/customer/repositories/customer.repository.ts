import { EntityRepository, Repository } from "typeorm";
import { CustomerEntity } from "./customer.entity";
import { CreateCustomerProfileDto } from "../dto/create-customer-profile.dto";

@EntityRepository(CustomerEntity)
export class CustomerRepository extends Repository<CustomerEntity> {
    async createCustomerProfile(createCustomerProfileDto: CreateCustomerProfileDto) {
        return createCustomerProfileDto;
    }
}