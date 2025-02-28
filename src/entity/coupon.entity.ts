
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { UserInfo } from "./user.entity";
@Entity()
export class Coupon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'uuid' }) // Make sure this is 'string' for UUID
  user_id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  duration: Date;

  @Column({ type: 'varchar', length: 50 })
  offer: Date;

  @Column({ type: 'varchar', length: 50 })
  valid_until: Date;

  @Column({ type: 'varchar', length: 50 })
  terms: Date;
 @ManyToOne(() => UserInfo, userInfo => userInfo.activities)
 @JoinColumn({ name: "user_id" })
 user: UserInfo;
} 

