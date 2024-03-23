import { Module } from '@nestjs/common';
import { GlossaryController } from './glossary.controller';
import { GlossaryService } from './glossary.service';
import { Glossary, GlossarySchema } from './schemas/glossary.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Glossary.name,
        schema: GlossarySchema,
      },
    ]),
  ],
  controllers: [GlossaryController],
  providers: [GlossaryService],
})
export class GlossaryModule {}
