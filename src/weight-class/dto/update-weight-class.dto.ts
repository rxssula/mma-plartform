import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateWeightClassDto {
  @Field({ nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  minWeightKg?: number;

  @Field(() => Int, { nullable: true })
  maxWeightKg?: number;
}
