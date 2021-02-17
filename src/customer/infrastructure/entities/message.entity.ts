import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CustomerEntity } from "./customer.entity";


@Entity()
export class MessageEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    message_id: number;

    @Column()
    content: string;

    @ManyToOne(() => CustomerEntity, customer => customer.messages)
    customer: CustomerEntity;
}