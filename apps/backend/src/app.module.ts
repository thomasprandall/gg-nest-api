import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigModule } from '@nestjs/config';

import { TeamsModule } from './teams/teams.module';
import { DraftModule } from './draft/draft.module';
import { HistoryModule } from './history/history.module';
import { GlossaryModule } from './glossary/glossary.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DatabaseModule,
    TeamsModule,
    DraftModule,
    HistoryModule,
    MongooseModule.forRoot('mongodb://localhost:27017/glossary'),
    GlossaryModule,
  ],
})
export class AppModule {}
