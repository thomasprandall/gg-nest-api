import { Controller, Get } from '@nestjs/common';
import { GlossaryService } from './glossary.service';
import { Glossary } from './schemas/glossary.schema';

@Controller('api/glossary')
export class GlossaryController {
  constructor(private readonly glossaryService: GlossaryService) {}

  @Get()
  findAll(): Promise<Glossary[]> {
    return this.glossaryService.findAll();
  }
}
