import { CreateCustomerProfileCommand } from "../impl";
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { InjectRepository } from "@nestjs/typeorm";
import { CustomerRepository } from "src/customer/repositories/customer.repository";

@CommandHandler(CreateCustomerProfileCommand)
export class CreateCustomerProfileHandler implements ICommandHandler<CreateCustomerProfileCommand> {
    constructor(
        @InjectRepository(CustomerRepository)
        private readonly customerRepository: CustomerRepository
    ) {}

    async execute(command: CreateCustomerProfileCommand) {
        return this.customerRepository.createCustomerProfile(command.createCustomerProfileDto);
    }
}