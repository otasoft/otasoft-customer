import { BaseEntity, Entity, Unique, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
@Unique(['username'])
export class CustomerEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    auth_id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;
}