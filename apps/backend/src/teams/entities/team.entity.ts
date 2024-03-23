import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Team {
  @PrimaryColumn()
  team: string;

  @Column({ nullable: false })
  full: string;

  @Column({ nullable: false })
  location: string;

  @Column({ nullable: false })
  nickname: string;

  @Column({ nullable: true })
  logo_path: string;

  @Column({ nullable: false })
  active: boolean;
}
