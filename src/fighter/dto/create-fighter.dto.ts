import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateFighterDto {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => Int)
  age: number;

  @Field(() => Int)
  heightInCm: number;

  @Field(() => Int)
  weightInKg: number;

  @Field()
  country: string;

  @Field()
  weightClassId: string;
}
