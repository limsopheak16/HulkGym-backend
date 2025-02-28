import "reflect-metadata";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Activity } from "./activity.entity";
import { Survey } from "./survey.entity";
import { Exercise } from "./exercise.entity";
import { Coupon } from "./coupon.entity";
import { CompanyInfo } from "./company.entity";

@Entity()
export class UserInfo {
  @PrimaryGeneratedColumn('uuid') // UUID will be a string
  id: string;

  @Column({ nullable: true })
  company_id: number;

  @Column({ nullable: true })
  workout_id: number;

  @Column()
  fullname: string;

  @Column({ nullable: true })
  phone_number: string;

  @Column()
  email: string;

  @Column()
  password: string;
  @OneToMany(() => Survey, survey => survey.user)

  surveys: Survey[];

  @OneToMany(() => Activity, (activity) => activity.user)
  activities: Activity[];

  @ManyToMany(() => Exercise)
  @JoinTable()
  exercise: Exercise[];

  @ManyToOne(() => Coupon, (coupon) => coupon)
  @JoinColumn({ name: "coupon_id" })
  coupons: Coupon;

  @ManyToOne(() => CompanyInfo, (company_info) => company_info)
  @JoinColumn({ name: "company_id" })
  company: CompanyInfo;
}
