import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateEventDto {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  location: string;

  @Field({ nullable: true })
  date: Date;

  @Field({ nullable: true })
  organization: string;

  @Field({ nullable: true })
  description?: string;
}
