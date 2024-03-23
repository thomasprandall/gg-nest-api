import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Standings } from './entities/standings.entity';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(Standings)
    private pickRepository: Repository<Standings>,
  ) {}

  async findSeasonStandings(year: number): Promise<Standings[]> {
    return this.pickRepository.find({
      where: {
        season: year,
      },
      order: {
        conf: 'ASC',
        division: 'ASC',
        pct: 'DESC',
      },
    });
  }

  async findTeamStandings(team: string): Promise<Standings[]> {
    return this.pickRepository.find({
      where: {
        team: team,
      },
      order: {
        season: 'DESC',
      },
    });
  }

  async findConferenceStandingsByYear(
    conf: 'AFC' | 'NFC',
    year: number,
  ): Promise<Standings[]> {
    return this.pickRepository.find({
      where: {
        conf: conf,
        season: year,
      },
      order: {
        pct: 'DESC',
      },
    });
  }
}
