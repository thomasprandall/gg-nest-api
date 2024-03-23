import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'draft_values' })
export class PickValues {
  @PrimaryColumn()
  pick: number;

  @Column()
  stuart: number;

  @Column()
  johnson: number;

  @Column()
  hill: number;

  @Column()
  otc: number;

  @Column()
  pff: number;
}
