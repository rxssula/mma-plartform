import { Module } from '@nestjs/common';
import { FighterService } from './fighter.service';
import { FighterResolver } from './fighter.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fighter } from './fighter.entity';
import { Fight } from 'src/fight/fight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fighter, Fight])],
  providers: [FighterService, FighterResolver],
})
export class FighterModule {}
