import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Fighter } from 'src/fighter/fighter.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('weight-classes')
export class WeightClass {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ unique: true })
  name: string;

  @Field(() => Int)
  @Column()
  maxWeightKg: number;

  @Field(() => Int)
  @Column()
  minWeightKg: number;

  @Field(() => [Fighter], { nullable: true })
  @OneToMany(() => Fighter, (fighter) => fighter.weightClass)
  fighters: Fighter[];
}
