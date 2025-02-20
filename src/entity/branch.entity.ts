import "reflect-metadata";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { CompanyInfo } from "./company.entity";
import { ContactInfo } from "./contact.entity";
import { Announcement } from "./annoucement.entity";

@Entity({ name: "branch" })
export class Branch {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 50, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  location: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  image: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date; 

  @ManyToOne(() => CompanyInfo, (company) => company)
  @JoinColumn({ name: "company_id" })
  company: CompanyInfo;

  @OneToMany(() => ContactInfo, (contact) => contact)
  contacts: ContactInfo[];

  @OneToMany(() => Announcement, (announcement) => announcement)
  announcements: Announcement[];

  //branch to promotion many to many
}
