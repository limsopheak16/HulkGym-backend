import "reflect-metadata";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { RoleEnum } from "../common/types/enum";
import { Activity } from "./activity.entity";
import { Survey } from "./survey.entity";

import { Exercise } from "./exercise.entity";


@Entity({ name: "user_info" })
export class UserInfo {
  @PrimaryGeneratedColumn()
  id: number;

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
  activities: Activity[]; // One user can have many activities

  @ManyToMany(() => Exercise)
  @JoinTable()
  exercise: Exercise[];
}
