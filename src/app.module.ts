import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FighterModule } from './fighter/fighter.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { WeightClassModule } from './weight-class/weight-class.module';
import { FightModule } from './fight/fight.module';
import { EventModule } from './event/event.module';
import { Fighter } from './fighter/fighter.entity';
import { Fight } from './fight/fight.entity';
import { WeightClass } from './weight-class/weight-class.entity';
import { Event } from './event/event.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'mma-platform',
      entities: [Fighter, Fight, WeightClass, Event],
      synchronize: false,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    FighterModule,
    WeightClassModule,
    FightModule,
    EventModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
