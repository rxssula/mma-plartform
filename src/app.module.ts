import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FightersModule } from './fighter/fighter.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'mma-platform',
      entities: [],
      synchronize: true,
    }),
    FightersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
