import { EntityRepository, Repository } from "typeorm";

import { MessageEntity } from "@infrastructure/entities";

@EntityRepository(MessageEntity)
export class MessageRepository extends Repository<MessageEntity> {}
