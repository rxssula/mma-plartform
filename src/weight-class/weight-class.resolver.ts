import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WeightClassService } from './weight-class.service';
import { WeightClass } from './weight-class.entity';
import { CreateWeightClassDto } from './dto/create-weight-class.dto';
import { UpdateWeightClassDto } from './dto/update-weight-class.dto';

@Resolver(() => WeightClass)
export class WeightClassResolver {
  constructor(private weightClassService: WeightClassService) {}

  @Query(() => WeightClass)
  async getWeightClassById(@Args('id') id: string) {
    return await this.weightClassService.getWeightClassById(id);
  }

  @Query(() => [WeightClass])
  async getAllWeightClasses() {
    return await this.weightClassService.getAllWeightClasses();
  }

  @Mutation(() => WeightClass)
  async createWeightClass(
    @Args('createWeightClassDto') createWeightClassDto: CreateWeightClassDto,
  ) {
    return await this.weightClassService.createWeightClass(
      createWeightClassDto,
    );
  }

  @Mutation(() => WeightClass)
  async updateWeightClass(
    @Args('id') id: string,
    @Args('updateWeightClassDto') updateWeightClassDto: UpdateWeightClassDto,
  ) {
    return await this.weightClassService.updateWeightClass(
      id,
      updateWeightClassDto,
    );
  }

  @Mutation(() => Boolean)
  async deleteWeightClass(@Args('id') id: string) {
    return await this.weightClassService.deleteWeightClass(id);
  }
}
