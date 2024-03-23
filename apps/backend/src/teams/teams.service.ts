import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  async findAll(): Promise<Team[]> {
    return this.teamRepository.find();
  }

  async findActive(): Promise<Team[]> {
    return this.teamRepository.find({
      where: {
        active: true,
      },
    });
  }

  async findOne(team: string): Promise<Team | null> {
    return this.teamRepository.findOneBy({ team });
  }
}
