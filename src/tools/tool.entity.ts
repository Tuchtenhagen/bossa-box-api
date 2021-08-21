import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('tools')
export class Tool {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column()
  description: string;
}
