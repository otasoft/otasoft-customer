import { MessageEntity } from "@infrastructure/entities";
import { CustomerRepository, MessageRepository } from "@infrastructure/repositories";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { RpcException } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import { GetCustomerMessagesQuery } from "../impl";

@QueryHandler(GetCustomerMessagesQuery)
export class GetCustomerMessagesHandler implements IQueryHandler<GetCustomerMessagesQuery> {
    constructor(
        @InjectRepository(MessageRepository)
        private readonly messageRepository: MessageRepository,
    ) {}

    async execute(query: GetCustomerMessagesQuery): Promise<MessageEntity[]> {
        const { id } = query;

        const messages = await this.messageRepository.find({ where: { customer: id } });

        return messages;
    }
}