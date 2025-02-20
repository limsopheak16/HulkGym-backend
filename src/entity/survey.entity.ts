// Survey.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany } from "typeorm";
import { UserInfo } from "./user.entity";
import { Marketing } from "./markating.entity";
@Entity()
export class Survey {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  marketing_id: number;

  @Column()
  user_id: number;

  @Column({ nullable: true })
  message: string;
  @ManyToOne(() => Marketing, marketing => marketing.surveys)
  @JoinColumn({ name: "marketing_id" })
  marketing: Marketing;
  @ManyToOne(() => UserInfo, userInfo => userInfo.activities)
    @JoinColumn({ name: "user_id" })
    user: UserInfo;
}