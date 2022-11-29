import { Study } from 'src/study/study.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Qna extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  user: string;

  @Column()
  date: string;

  @Column()
  isDelete: boolean;

  @Column()
  StudyId: number;

  @ManyToOne((type) => Study, (study) => study.qna, { eager: false })
  study: Study;

  // @RelationId((qna: Qna) => Qna.study)
  // studyId: number;
}
