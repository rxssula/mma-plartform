import { Args, Query, Resolver } from '@nestjs/graphql';
import { Fighter } from './fighter.entity';
import { FighterService } from './fighter.service';

@Resolver()
export class FighterResolver {
  constructor(private fighterService: FighterService) {}

  @Query(() => Fighter)
  async getFighterById(@Args('id') id: number) {
    return await this.fighterService.getFighterById(id);
  }

  @Query(() => [Fighter])
  async getAllFighters() {
    return await this.fighterService.getAllFighters();
  }
}
