import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany
  }from 'typeorm';
import { UserInfo } from "./user.entity";

@Entity({ name: "coupon" })
export class Coupon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar',length: 50 })
    name: string;

    @Column({ type: 'varchar',length: 50 })
    duration: string;

    @Column({type: 'varchar', length: 50 })
    offer: string;

    @Column({ type: 'varchar',length: 50 })
    valid_until: string;

    @Column({ type: 'varchar',length: 50 })
    terms: string;

    @OneToMany(() => UserInfo, (user_info) => user_info)
    users: UserInfo[];
}