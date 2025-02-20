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

@Entity({ name: "announcement" })
export class Announcement {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 30, nullable: false })
  title: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Branch, (branch) => branch)
  @JoinColumn({ name: "branch_id" })
  branch: Branch[];
  
}
