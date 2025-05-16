import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Fight } from 'src/fight/fight.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@ObjectType()
@Entity('events')
export class Event {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  location: string;

  @Field(() => Date)
  @Column()
  date: Date;

  @Field()
  @Column()
  organization: string;

  @Field(() => [Fight], { nullable: true })
  @OneToMany(() => Fight, (fight) => fight.event)
  fights: Fight[];

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string;
}
