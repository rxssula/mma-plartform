import { Module } from '@nestjs/common';
import { WeightClassService } from './weight-class.service';

@Module({
  providers: [WeightClassService]
})
export class WeightClassModule {}
