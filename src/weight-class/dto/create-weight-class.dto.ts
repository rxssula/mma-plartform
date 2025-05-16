import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateWeightClassDto {
  @Field()
  name: string;

  @Field(() => Int)
  minWeightKg: number;

  @Field(() => Int)
  maxWeightKg: number;
}
