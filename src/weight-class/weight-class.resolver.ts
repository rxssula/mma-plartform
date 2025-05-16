import { Args, Query, Resolver } from '@nestjs/graphql';
import { WeightClassService } from './weight-class.service';
import { WeightClass } from './weight-class.entity';

@Resolver()
export class WeightClassResolver {
  constructor(private weightClassService: WeightClassService) {}

  @Query(() => WeightClass)
  async getWeightClassById(@Args('id') id: string) {
    return await this.weightClassService.getWeightClassById(id);
  }

  @Query(() => [WeightClass])
  async getAllFighters() {
    return await this.weightClassService.getAllWeightClasses();
  }
}
