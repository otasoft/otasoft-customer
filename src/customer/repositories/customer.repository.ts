import { EntityRepository, Repository } from "typeorm";
import { CustomerEntity } from "./customer.entity";
import { CreateCustomerProfileDto } from "../dto/create-customer-profile.dto";
import { RpcException } from "@nestjs/microservices";

@EntityRepository(CustomerEntity)
export class CustomerRepository extends Repository<CustomerEntity> {
    async createCustomerProfile(createCustomerProfileDto: CreateCustomerProfileDto) {
        const { first_name, last_name } = createCustomerProfileDto;

        const customer = new CustomerEntity();
        customer.first_name = first_name;
        customer.last_name = last_name;

        try {
            await customer.save()
            return customer;
        } catch(error) {
            throw new RpcException(error);
        }
    }
}