import { Module } from '@nestjs/common';
import { WeightClassService } from './weight-class.service';
import { WeightClassResolver } from './weight-class.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeightClass } from './weight-class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WeightClass])],
  providers: [WeightClassService, WeightClassResolver],
})
export class WeightClassModule {}
