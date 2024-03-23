import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DraftPick } from './entities/pick.entity';

@Injectable()
export class DraftService {
  constructor(
    @InjectRepository(DraftPick)
    private pickRepository: Repository<DraftPick>,
  ) {}

  // async findAll(): Promise<DraftPick[]> {
  //   return this.pickRepository.find({});
  // }

  async findByTeam(team: string): Promise<DraftPick[]> {
    return this.pickRepository.find({
      where: {
        team: team,
      },
      relations: ['values'],
    });
  }

  async findByTeamByYear(team: string, year: number): Promise<DraftPick[]> {
    return this.pickRepository.find({
      where: {
        team: team,
        season: year,
      },
      relations: ['values'],
    });
  }

  async findByYear(year: number): Promise<DraftPick[]> {
    return this.pickRepository.find({
      where: {
        season: year,
      },
      relations: ['values'],
    });
  }
}
