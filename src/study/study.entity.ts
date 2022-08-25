import { User } from 'src/auth/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StudyStatus } from './study-status.enum';

@Entity()
export class Study extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  section: string;

  @Column()
  hashtag: string;

  @Column()
  area: string;

  @Column()
  date: string;

  @Column()
  users: string;

  @Column()
  status: StudyStatus;

  @Column()
  isDelete: boolean;

  @ManyToOne((type) => User, (user) => user.study, { eager: false })
  user: User;
}
