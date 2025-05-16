import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fighter } from './fighter.entity';
import { Repository } from 'typeorm';
import { Fight } from 'src/fight/fight.entity';
import { CreateFighterDto } from './dto/create-fighter.dto';
import { UpdateFighterDto } from './dto/update-fighter.dto';

@Injectable()
export class FighterService {
  constructor(
    @InjectRepository(Fighter) private fighterRepository: Repository<Fighter>,
    @InjectRepository(Fight) private fightRepository: Repository<Fight>,
  ) {}

  async getAllFighters(): Promise<Fighter[]> {
    return await this.fighterRepository.find({ relations: ['weightClass'] });
  }

  async getFighterById(id: string): Promise<Fighter> {
    const fighter = await this.fighterRepository.findOne({
      where: { id },
      relations: ['weightClass'],
    });

    if (!fighter) {
      throw new NotFoundException(`Fighter with id ${id} was not found`);
    }

    return fighter;
  }

  async create(createFighterDto: CreateFighterDto): Promise<Fighter> {
    const fighter = this.fighterRepository.create(createFighterDto);
    return await this.fighterRepository.save(fighter);
  }

  async update(
    id: string,
    updateFighterDto: UpdateFighterDto,
  ): Promise<Fighter> {
    await this.fighterRepository.update(id, updateFighterDto);
    return this.getFighterById(id);
  }

  async remove(id: string): Promise<void> {
    const fighter = await this.getFighterById(id);
    await this.fighterRepository.remove(fighter);
  }

  async getFighterFights(fighterId: string): Promise<Fight[]> {
    return this.fightRepository.find({
      where: [{ fighter1Id: fighterId }, { fighter2Id: fighterId }],
      relations: ['fighter1', 'fighter2', 'event'],
    });
  }
}
