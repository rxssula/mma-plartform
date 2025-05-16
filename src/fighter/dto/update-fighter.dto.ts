import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateFighterDto {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(() => Int, { nullable: true })
  age?: number;

  @Field({ nullable: true })
  country?: string;

  @Field(() => Int, { nullable: true })
  heightInCm?: number;

  @Field(() => Int, { nullable: true })
  weightInKg?: number;

  @Field({ nullable: true })
  weightClassId?: string;
}
