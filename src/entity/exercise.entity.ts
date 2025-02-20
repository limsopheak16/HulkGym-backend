import "reflect-metadata";

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Workout } from "./workout.entity";
import { UserInfo } from "./user.entity";

@Entity({ name: "exercise" })
export class Exercise {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 30, nullable: false })
  name: string;

  @Column({ type: "int", nullable: false })
  sets: number;

  @Column({ type: "int", nullable: true })
  weight_lbs: number;

  @Column({ type: "varchar", length: 30, nullable: false })
  reps: string;

  @Column({ type: "varchar", length: 30, nullable: false })
  calories: string;

  @CreateDateColumn()
  createAt: Date;
  @UpdateDateColumn()
  updateAt: Date;

  @ManyToOne(() => Workout, (workout) => workout)
  @JoinColumn({ name: "workout_id" })
  workoutPlan: Workout;

  @ManyToMany(() => UserInfo)
  @JoinTable()
  user_info: UserInfo[];

  
}
