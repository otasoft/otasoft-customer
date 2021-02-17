import { TextResponseModel } from "@application/models";
import { MessageRepository } from "@infrastructure/repositories";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { RpcException } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteMessageCommand } from "../impl";

@CommandHandler(DeleteMessageCommand)
export class DeleteMessageHandler implements ICommandHandler<DeleteMessageCommand> {
    constructor(
        @InjectRepository(MessageRepository)
        private readonly messageRepository: MessageRepository,
    ) {}

    async execute(command: DeleteMessageCommand): Promise<TextResponseModel> {
        const { id } = command;

        const message = await this.messageRepository.findOne(id);

        try {
            await this.messageRepository.delete(message);

            return { response: 'Message deleted' }
        } catch (error) {
            throw new RpcException({ errorStatus: 'Cannot delete message', statusCode: 400 })
        }
    }
}