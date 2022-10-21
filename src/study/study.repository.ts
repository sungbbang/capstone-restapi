import { NotFoundException } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { StudyStatus } from './study-status.enum';
import { Study } from './study.entity';
import { CreateStudyDto } from './dto/create-study.dto';

@EntityRepository(Study)
export class StudyRepository extends Repository<Study> {
  async getAllStudys(): Promise<Study[]> {
    const studys = await this.find();
    return studys;
  }

  async getStudyById(id: number): Promise<Study> {
    const found = await this.findOne(id);
    if (!found) throw new NotFoundException(`can't find Study with id : ${id}`);
    return found;
  }

  async createStudy(
    createStudyDto: CreateStudyDto,
    user: User,
  ): Promise<Study> {
    const { title, description, section, hashtag, area, date } = createStudyDto;
    const Study = this.create({
      title,
      description,
      section,
      hashtag,
      area,
      date,
      users: user.nickname,
      status: StudyStatus.PUBLIC,
      isDelete: false,
      user,
    });

    await this.save(Study);
    return Study;
  }

  async deleteStudy(id: number, user: User): Promise<void> {
    const result = await this.delete({ id, user });

    if (!result.affected) {
      throw new NotFoundException(`Can't find Study with id : ${id}`);
    }
  }

  async updateStudyStatus(id: number, status: StudyStatus): Promise<Study> {
    const study = await this.getStudyById(id);
    study.status = status;
    await this.save(study);
    return study;
  }

  async updateStudyUsers(id: number, user: string): Promise<Study> {
    const study = await this.getStudyById(id);
    study.users += user;
    await this.save(study);
    return study;
  }
}