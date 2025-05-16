import { Field, InputType, Int } from '@nestjs/graphql';
import { FightResult, WinMethod } from '../fight.entity';

@InputType()
export class CreateFightDto {
  @Field()
  fighter1Id: string;

  @Field()
  fighter2Id: string;

  @Field()
  eventId: string;

  @Field()
  weightClassId: string;

  @Field(() => Int)
  scheduledRounds: number;

  @Field(() => Int)
  rounds: number;

  @Field(() => String, { defaultValue: FightResult.PENDING })
  result: FightResult = FightResult.PENDING;

  @Field(() => String, { defaultValue: WinMethod.PENDING })
  winMethod: WinMethod = WinMethod.PENDING;
}
