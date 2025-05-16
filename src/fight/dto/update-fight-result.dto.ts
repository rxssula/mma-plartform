import { InputType, Field, Int } from '@nestjs/graphql';
import { FightResult, WinMethod } from '../fight.entity';

@InputType()
export class UpdateFightResultDto {
  @Field(() => String)
  result: FightResult;

  @Field(() => String)
  winMethod: WinMethod;

  @Field(() => Int)
  rounds: number;
}
