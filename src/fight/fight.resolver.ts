import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { FightService } from './fight.service';
import { Fight } from './fight.entity';
import { CreateFightDto } from './dto/create-fight.dto';
import { UpdateFightResultDto } from './dto/update-fight-result.dto';

@Resolver(() => Fight)
export class FightResolver {
    constructor(private readonly fightService: FightService) { }

    @Query(() => [Fight], { name: 'fights' })
    async getAllFights(): Promise<Fight[]> {
        return this.fightService.getAllFights();
    }

    @Query(() => Fight, { name: 'fight' })
    async getFightById(@Args('id', { type: () => ID }) id: string): Promise<Fight> {
        return this.fightService.getFightById(id);
    }

    @Query(() => [Fight], { name: 'fightsByEvent' })
    async getFightsByEvent(
        @Args('eventId', { type: () => ID }) eventId: string,
    ): Promise<Fight[]> {
        return this.fightService.getFightsByEvent(eventId);
    }

    @Mutation(() => Fight, { name: 'createFight' })
    async createFight(
        @Args('createFightInput') createFightDto: CreateFightDto,
    ): Promise<Fight> {
        return this.fightService.createFight(createFightDto);
    }

    @Mutation(() => Boolean, { name: 'deleteFight' })
    async deleteFight(@Args('id', { type: () => ID }) id: string): Promise<boolean> {
        await this.fightService.deleteFight(id);
        return true;
    }

    @Mutation(() => Fight, { name: 'updateFightResult' })
    async updateFightResult(
        @Args('id', { type: () => ID }) id: string,
        @Args('updateFightResultInput') updateFightResultDto: UpdateFightResultDto,
    ): Promise<Fight> {
        return this.fightService.updateFightResult(id, updateFightResultDto);
    }
} 