import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fight } from './fight.entity';
import { Repository } from 'typeorm';
import { CreateFightDto } from './dto/create-fight.dto';
import { UpdateFightResultDto } from './dto/update-fight-result.dto';

@Injectable()
export class FightService {
  constructor(
    @InjectRepository(Fight) private fightRepository: Repository<Fight>,
  ) { }

  async createFight(createFightDto: CreateFightDto): Promise<Fight> {
    const fight = this.fightRepository.create(createFightDto);
    return this.fightRepository.save(fight);
  }

  async getAllFights(): Promise<Fight[]> {
    return await this.fightRepository.find({
      relations: ['fighter1', 'fighter2', 'event'],
    });
  }

  async getFightById(id: string): Promise<Fight> {
    const fight = await this.fightRepository.findOne({
      where: { id },
      relations: ['fighter1', 'fighter2', 'event'],
    });

    if (!fight) {
      throw new NotFoundException(`Fight with ID ${id} was not found`);
    }

    return fight;
  }

  async getFightsByEvent(eventId: string): Promise<Fight[]> {
    return await this.fightRepository.find({
      where: { eventId },
      relations: ['fighter1', 'fighter2'],
    });
  }

  async updateFightResult(id: string, updateFightResultDto: UpdateFightResultDto): Promise<Fight> {
    const fight = await this.getFightById(id);

    fight.result = updateFightResultDto.result;
    fight.winMethod = updateFightResultDto.winMethod;
    fight.rounds = updateFightResultDto.rounds;

    return this.fightRepository.save(fight);
  }

  async deleteFight(id: string): Promise<void> {
    await this.fightRepository.delete(id);
  }
}
