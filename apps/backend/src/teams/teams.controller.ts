import { Controller, Get, Param } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Team } from './entities/team.entity';

@Controller('api/teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}
  @Get()
  findActive(): Promise<Team[]> {
    return this.teamsService.findActive();
  }

  @Get(':team')
  findOne(@Param('team') team: string) {
    return this.teamsService.findOne(team);
  }
}
