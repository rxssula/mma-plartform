import { Module } from '@nestjs/common';
import { FightService } from './fight.service';

@Module({
  providers: [FightService]
})
export class FightModule {}
