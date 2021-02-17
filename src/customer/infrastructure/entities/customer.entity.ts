import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MessageEntity } from './message.entity';

@Entity()
export class CustomerEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @OneToMany(() => MessageEntity, message => message.customer)
  messages: MessageEntity[];
}
