import { Module } from '@nestjs/common';
import { FightService } from './fight.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fight } from './fight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fight])],
  providers: [FightService],
})
export class FightModule {}
