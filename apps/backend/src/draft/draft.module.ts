import { Module } from '@nestjs/common';
import { DraftController } from './draft.controller';
import { DraftService } from './draft.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DraftPick } from './entities/pick.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DraftPick])],
  controllers: [DraftController],
  providers: [DraftService],
})
export class DraftModule {}
