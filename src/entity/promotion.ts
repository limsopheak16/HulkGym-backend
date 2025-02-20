import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Membership } from './membership';

@Entity('promotion')
export class Promotion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  promo_name: string;

  @Column({ type: 'varchar', length: 255 })
  discount_rate: string;

  @Column({ type: 'date' })
  expiry_date: Date; 


  @Column({ type: 'text', nullable: true })
  offer_details: string;

  @OneToMany(() => Membership, (membership) => membership)
  memberships: Membership[];
}
// Promotion have relationship with brand ManyToMany