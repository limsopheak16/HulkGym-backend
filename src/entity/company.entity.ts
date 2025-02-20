import "reflect-metadata";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Branch } from "./branch.entity";
import { UserInfo } from "./user.entity";

@Entity({ name: "company_info" })
export class CompanyInfo {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 50, nullable: false })
  logo: string;

  @Column({ type: "varchar", length: 50, nullable: false })
  company_name: string;

  @Column({ type: "varchar", length: 50, nullable: false })
  email: string;

  @Column({ type: "varchar", length: 50, nullable: false })
  phone_number: string;

  @Column({ type: "varchar", length: 50, nullable: false })
  location: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Branch, (branch) => branch)
  branches: Branch[];
  
  @OneToMany(() => UserInfo, (user_info) => user_info)
  users: UserInfo[];


}
