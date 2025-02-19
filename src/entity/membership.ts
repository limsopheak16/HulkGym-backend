import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Promotion } from './promotion';

@Entity('membership')
export class Membership {
  @PrimaryGeneratedColumn('uuid')
  id: string;


  @Column({ type: 'varchar', length: 255 })
  start_date: string;

  @Column({ type: 'varchar', length: 255 })
  end_date: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  plan_name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  price: number;

  @Column({ type: 'text', nullable: true })
  features: string;


  @ManyToOne(() => Promotion, (promotion) => promotion.memberships)
  @JoinColumn({ name: 'promotion_id' }) 
  promotion: Promotion;
}
// Membership have relationship with user ManyToMany