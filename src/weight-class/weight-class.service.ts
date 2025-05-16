import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WeightClass } from './weight-class.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WeightClassService {
  constructor(
    @InjectRepository(WeightClass)
    private weightClassRepository: Repository<WeightClass>,
  ) {}

  async getAllWeightClasses(): Promise<WeightClass[]> {
    return await this.weightClassRepository.find();
  }

  async getWeightClassById(id: string): Promise<WeightClass> {
    const weightClass = await this.weightClassRepository.findOne({
      where: { id },
    });

    if (!weightClass) {
      throw new NotFoundException(`Weight Class with ID ${id} was not found`);
    }

    return weightClass;
  }
}
