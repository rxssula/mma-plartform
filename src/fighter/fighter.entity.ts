import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('fighters')
export class Fighter {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  firstName: string;
  @Column()
  lastName: string;

  @Column()
  country: string;

  @Column({ default: 0 })
  wins: number;
  @Column({ default: 0 })
  losses: number;
  @Column({ default: 0 })
  draws: number;

  @Column({ default: 0 })
  knockouts: number;
  @Column({ default: 0 })
  submissions: number;
  @Column({ default: 0 })
  decisions: number;

  @Column()
  age: number;
  @Column()
  heightInCm: number;
  @Column()
  weightInKg: number;
}
