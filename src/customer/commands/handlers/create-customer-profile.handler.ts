import { CreateCustomerProfileCommand } from "../impl";
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { InjectRepository } from "@nestjs/typeorm";
import { CustomerRepository } from "src/customer/repositories/customer.repository";
import { RpcException } from "@nestjs/microservices";

@CommandHandler(CreateCustomerProfileCommand)
export class CreateCustomerProfileHandler implements ICommandHandler<CreateCustomerProfileCommand> {
    constructor(
        @InjectRepository(CustomerRepository)
        private readonly customerRepository: CustomerRepository
    ) {}

    async execute(command: CreateCustomerProfileCommand) {
        const { first_name, last_name } = command.createCustomerProfileDto;
        const customer = await this.customerRepository.create()

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