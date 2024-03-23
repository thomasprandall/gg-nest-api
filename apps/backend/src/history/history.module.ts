import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { Standings } from './entities/standings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Standings])],
  controllers: [HistoryController],
  providers: [HistoryService],
})
export class HistoryModule {}
