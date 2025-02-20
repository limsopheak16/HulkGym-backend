import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { UserInfo } from "./user.entity";
import { Marketing } from "./markating.entity";

@Entity({ name: "survey" })
export class Survey {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  message: string;

  @ManyToOne(() => Marketing, (marketing) => marketing)
  @JoinColumn({ name: "marketing_id" })
  marketing: Marketing;

  @ManyToOne(() => UserInfo, (userInfo) => userInfo)
  @JoinColumn({ name: "user_id" })
  user: UserInfo;
}
