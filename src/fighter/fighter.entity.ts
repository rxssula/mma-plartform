import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Fight } from 'src/fight/fight.entity';
import { WeightClass } from 'src/weight-class/weight-class.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('fighters')
export class Fighter {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  country: string;

  @Field(() => Int, { defaultValue: 0 })
  @Column({ default: 0 })
  wins: number;

  @Field(() => Int, { defaultValue: 0 })
  @Column({ default: 0 })
  losses: number;

  @Field(() => Int, { defaultValue: 0 })
  @Column({ default: 0 })
  draws: number;

  @Field(() => Int, { defaultValue: 0 })
  @Column({ default: 0 })
  knockouts: number;

  @Field(() => Int, { defaultValue: 0 })
  @Column({ default: 0 })
  submissions: number;

  @Field(() => Int, { defaultValue: 0 })
  @Column({ default: 0 })
  decisions: number;

  @Field(() => Int)
  @Column()
  age: number;

  @Field(() => Int)
  @Column()
  heightInCm: number;

  @Field(() => Int)
  @Column()
  weightInKg: number;

  @Field(() => [Fight], { nullable: true })
  @OneToMany(() => Fight, (fight) => fight.fighter1 || fight.fighter2)
  fights: Fight[];

  @Field(() => WeightClass)
  @ManyToOne(() => WeightClass, (weightClass) => weightClass.fighters)
  @JoinColumn({ name: 'weightClassId' })
  weightClass: WeightClass;

  @Column()
  weightClassId: string;
}
