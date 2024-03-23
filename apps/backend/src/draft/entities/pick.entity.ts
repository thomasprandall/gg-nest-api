import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PickValues } from './values.entity';

@Entity({ name: 'draft_picks' })
export class DraftPick {
  @PrimaryColumn()
  season: number;

  @PrimaryColumn()
  team: string;

  @Column()
  round: number;

  @PrimaryColumn()
  pick: number;

  @Column()
  pfr_id: string;

  @Column()
  pfr_name: string;

  @Column()
  side: string;

  @Column()
  category: string;

  @Column()
  position: string;

  @ManyToOne(() => PickValues)
  @JoinColumn({ name: 'pick' })
  values: PickValues;
}
