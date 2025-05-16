import { Module } from '@nestjs/common';
import { FightService } from './fight.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fight } from './fight.entity';
import { FightResolver } from './fight.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Fight])],
  providers: [FightService, FightResolver],
})
export class FightModule { }
