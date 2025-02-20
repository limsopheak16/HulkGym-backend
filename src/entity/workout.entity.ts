import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { WorkoutPlan } from "./workoutPlan";
import { Exercise } from "./exercise.entity";

@Entity("workout")
export class Workout {
  @PrimaryGeneratedColumn("uuid")
  id: string; // UUID as a primary key

  @Column({ nullable: false })
  type: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => WorkoutPlan, (workoutPlan) => workoutPlan)
  @JoinColumn({ name: "workoutPlan_id" })
  workoutPlans: WorkoutPlan;

  @OneToMany(() => Exercise, (exercise) => exercise)
  exercises: Exercise[];
}
