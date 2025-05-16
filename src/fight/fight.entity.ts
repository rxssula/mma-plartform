import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Fighter } from 'src/fighter/fighter.entity';
import { Event } from 'src/event/event.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum FightResult {
  FIGHTER1_WIN = 'FIGHTER1_WIN',
  FIGHTER2_WIN = 'FIGHTER2_WIN',
  DRAW = 'DRAW',
  NO_CONTEST = 'NO_CONTEST',
  PENDING = 'PENDING',
}

export enum WinMethod {
  KNOCKOUT = 'KNOCKOUT',
  TECHNICAL_KNOCKOUT = 'TECHNICAL_KNOCKOUT',
  SUBMISSION = 'SUBMISSION',
  DECISION = 'DECISION',
  DISQUALIFICATION = 'DISQUALIFICATION',
  FORFEIT = 'FORFEIT',
  NO_CONTEST = 'NO_CONTEST',
  PENDING = 'PENDING',
}

@ObjectType()
@Entity('fights')
export class Fight {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Fighter)
  @ManyToOne(() => Fighter, (fighter) => fighter.fights)
  @JoinColumn({ name: 'fighter1Id' })
  fighter1: Fighter;

  @Column()
  fighter1Id: string;

  @Field(() => Fighter)
  @ManyToOne(() => Fighter, (fighter) => fighter.fights)
  @JoinColumn({ name: 'fighter2Id' })
  fighter2: Fighter;

  @Column()
  fighter2Id: string;

  @Field(() => Event)
  @ManyToOne(() => Event, (event) => event.fights)
  @JoinColumn({ name: 'eventId' })
  event: Event;

  @Column()
  eventId: string;

  @Field()
  @Column({ type: 'enum', enum: FightResult, default: FightResult.PENDING })
  result: FightResult;

  @Field()
  @Column({ type: 'enum', enum: WinMethod, default: WinMethod.PENDING })
  winMethod: WinMethod;

  @Field()
  @Column()
  weightClassId: string;

  @Field()
  @Column()
  rounds: number;

  @Field()
  @Column()
  scheduledRounds: number;
}
