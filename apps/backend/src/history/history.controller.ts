import { Controller, Get, Param } from '@nestjs/common';
import { HistoryService } from './history.service';
import { Standings } from './entities/standings.entity';

@Controller('api/history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get('standings/:year')
  findSeasonStandings(@Param('year') year: number): Promise<Standings[]> {
    return this.historyService.findSeasonStandings(year);
  }

  @Get('team/:team')
  findTeamStandings(@Param('team') team: string): Promise<Standings[]> {
    return this.historyService.findTeamStandings(team);
  }

  @Get('conf/:conf/:year')
  findConferenceStandingsByYear(
    @Param('conf') conf: 'AFC' | 'NFC',
    @Param('year') year: number,
  ): Promise<Standings[]> {
    return this.historyService.findConferenceStandingsByYear(conf, year);
  }

  // @Get('/:team/:year')
  // findTeamSeason(@Param('team') team: string, @Param('year') year: number) {
  //   return this.historyService.findTeamSeason(team, year);
  // }

  // @Get('/:conf/:year')
  // findConferenceStandings(@Param('conf') conf: string, @Param('year') year: number) {
  //   return this.historyService.findConferenceStandings(conf, year);
  // }

  // @Get('/:div/:year')
  // findDivisionStandings(@Param('div') div: string, @Param('year') year: number) {
  //   return this.historyService.findDivisionStandings(div, year);
  // }
}
