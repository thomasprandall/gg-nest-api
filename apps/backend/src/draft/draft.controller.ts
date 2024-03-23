import { Controller, Param, Get } from '@nestjs/common';
import { DraftService } from './draft.service';
import { DraftPick } from './entities/pick.entity';

@Controller('api/draft')
export class DraftController {
  constructor(private readonly draftService: DraftService) {}
  // @Get()
  // findAll(): Promise<DraftPick[]> {
  //   return this.draftService.findAll();
  // }

  @Get(':team')
  findByTeam(@Param('team') team: string): Promise<DraftPick[]> {
    return this.draftService.findByTeam(team);
  }

  @Get('/full/:year')
  findByYear(@Param('year') year: number): Promise<DraftPick[]> {
    return this.draftService.findByYear(year);
  }

  @Get(':team/:year')
  findByTeamByYear(
    @Param('team') team: string,
    @Param('year') year: number,
  ): Promise<DraftPick[]> {
    return this.draftService.findByTeamByYear(team, year);
  }
}
