import { Injectable, NotFoundException } from '@nestjs/common';
import { StudyStatus } from './study-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateStudyDto } from './dto/create-study.dto';
import { StudyRepository } from './study.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Study } from './study.entity';
import { User } from 'src/auth/user.entity';

@Injectable()
export class StudysService {
  constructor(
    @InjectRepository(StudyRepository)
    private StudyRepository: StudyRepository,
  ) {}

  getAllStudys(user: User): Promise<Study[]> {
    return this.StudyRepository.getAllStudys(user);
  }

  createStudy(createStudyDto: CreateStudyDto, user: User): Promise<Study> {
    return this.StudyRepository.createStudy(createStudyDto, user);
  }

  getStudyById(id: number): Promise<Study> {
    return this.StudyRepository.getStudyById(id);
  }

  deleteStudy(id: number, user: User): Promise<void> {
    return this.StudyRepository.deleteStudy(id, user);
  }

  updateStudyStatus(id: number, status: StudyStatus): Promise<Study> {
    return this.StudyRepository.updateStudyStatus(id, status);
  }

  updateStudyUsers(id: number, user: string): Promise<Study> {
    return this.StudyRepository.updateStudyUsers(id, user);
  }
}
