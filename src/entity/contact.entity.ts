import "reflect-metadata";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Branch } from "./branch.entity";

@Entity({ name: "contact" })
export class ContactInfo {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 50, nullable: false })
  email: string;

  @Column({ type: "varchar", length: 50, nullable: false })
  phone_number: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Branch, (branch) => branch.contacts)
  @JoinColumn({ name: "branch_id" })
  branch: Branch;
  
}
