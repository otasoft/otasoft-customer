import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CustomerEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;
}
