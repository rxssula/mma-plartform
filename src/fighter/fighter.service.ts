import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fighter } from './fighter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FighterService {
  constructor(
    @InjectRepository(Fighter) private fighterRepository: Repository<Fighter>,
  ) {}

  async getAllFighters(): Promise<Fighter[]> {
    return await this.fighterRepository.find();
  }

  async getFighterById(id: string): Promise<Fighter> {
    const fighter = await this.fighterRepository.findOne({ where: { id } });

    if (!fighter) {
      throw new NotFoundException(`Fighter with id ${id} was not found`);
    }

    return fighter;
  }
}
