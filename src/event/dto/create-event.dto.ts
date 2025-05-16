import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateEventDto {
  @Field()
  name: string;

  @Field()
  location: string;

  @Field(() => Date)
  date: Date;

  @Field()
  organization: string;

  @Field({ nullable: true })
  description?: string;
}
