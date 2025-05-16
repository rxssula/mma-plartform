import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Fighter } from './fighter.entity';
import { FighterService } from './fighter.service';
import { CreateFighterDto } from './dto/create-fighter.dto';
import { UpdateFighterDto } from './dto/update-fighter.dto';
import { Fight } from 'src/fight/fight.entity';

@Resolver(() => Fighter)
export class FighterResolver {
  constructor(private fighterService: FighterService) {}

  @Query(() => Fighter)
  async getFighterById(@Args('id', { type: () => String }) id: string) {
    return await this.fighterService.getFighterById(id);
  }

  @Query(() => [Fighter])
  async getAllFighters() {
    return await this.fighterService.getAllFighters();
  }

  @Mutation(() => Fighter)
  async createFighter(
    @Args('createFighterInput') createFighterDto: CreateFighterDto,
  ) {
    return this.fighterService.create(createFighterDto);
  }

  @Mutation(() => Fighter)
  async updateFighter(
    @Args('id', { type: () => String }) id: string,
    @Args('updateFighterInput') updateFighterDto: UpdateFighterDto,
  ) {
    return this.fighterService.update(id, updateFighterDto);
  }

  @Mutation(() => Boolean)
  async removeFighter(@Args('id', { type: () => String }) id: string) {
    await this.fighterService.remove(id);
    return true;
  }

  @ResolveField('fights', () => [Fight])
  async getFights(@Parent() fighter: Fighter) {
    return this.fighterService.getFighterFights(fighter.id);
  }
}
