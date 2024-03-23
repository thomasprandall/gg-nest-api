import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'history_standings' })
export class Standings {
  @PrimaryColumn()
  season: number;

  @Column()
  conf: string;

  @Column()
  division: string;

  @PrimaryColumn()
  team: string;

  @Column()
  wins: number;

  @Column()
  losses: number;

  @Column()
  ties: number;

  @Column({ type: 'decimal' })
  pct: number;

  @Column()
  div_rank: number;

  @Column()
  points_scored: number;

  @Column()
  points_allowed: number;

  @Column()
  points_net: number;

  @Column({ type: 'decimal' })
  sov: number;

  @Column({ type: 'decimal' })
  sos: number;

  @Column()
  seed: number;

  @Column()
  playoff_result: number;
}
