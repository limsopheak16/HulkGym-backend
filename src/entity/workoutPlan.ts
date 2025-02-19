import "reflect-metadata";

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm";
import { Workout } from "./workout.entity";


@Entity({ name: "workoutPlan" })
export class WorkoutPlan {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  name: string;

  @CreateDateColumn()
  createAt: Date; // Timestamp of creation

  @UpdateDateColumn()
  updateAt: Date; // Timestamp of last update

  @OneToMany(() => Workout, (workout) => workout)
  workouts: Workout[]; 
}
