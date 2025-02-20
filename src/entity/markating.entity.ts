
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Survey } from "./survey.entity";

@Entity({ name: "marketing" })
export class Marketing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Survey, survey => survey)
  surveys: Survey[];
}