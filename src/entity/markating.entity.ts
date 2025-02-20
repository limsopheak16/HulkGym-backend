// Marketing.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Survey } from "./survey.entity";
export class Marketing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Survey, survey => survey.marketing_id)
  surveys: Survey[];
}