import { Study } from 'src/study/study.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  nickname: string;

  @Column()
  introduce: string;

  @Column()
  area: string;

  @Column()
  category: string;

  @OneToMany((type) => Study, (study) => study.user, { eager: true })
  study: Study[];
}
