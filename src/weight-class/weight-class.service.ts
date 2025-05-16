import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WeightClass } from './weight-class.entity';
import { Repository } from 'typeorm';
import { CreateWeightClassDto } from './dto/create-weight-class.dto';
import { UpdateWeightClassDto } from './dto/update-weight-class.dto';

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

  async createWeightClass(
    createWeightClassDto: CreateWeightClassDto,
  ): Promise<WeightClass> {
    const newWeightClass =
      this.weightClassRepository.create(createWeightClassDto);
    return await this.weightClassRepository.save(newWeightClass);
  }

  async updateWeightClass(
    id: string,
    updateWeightClassDto: UpdateWeightClassDto,
  ): Promise<WeightClass> {
    const weightClass = await this.getWeightClassById(id);

    Object.assign(weightClass, updateWeightClassDto);
    return await this.weightClassRepository.save(weightClass);
  }

  async deleteWeightClass(id: string): Promise<boolean> {
    const weightClass = await this.getWeightClassById(id);
    const result = await this.weightClassRepository.remove(weightClass);
    return !!result;
  }
}
