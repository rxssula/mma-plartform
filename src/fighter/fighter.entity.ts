import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('fighters')
export class Fighter {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: number;

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

  // Fights column go here

  // Weight class go here
}
