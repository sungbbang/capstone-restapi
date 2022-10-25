import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Qna } from './qna.entity';
import { CreateQnADto } from './dto/create-qna.dto';

@EntityRepository(Qna)
export class QnaRepository extends Repository<Qna> {
  async getAllBoard(id: number): Promise<Qna[]> {
    const qna = await this.find({ StudyId: id });
    return qna;
  }

  async createBoard(createQnADto: CreateQnADto): Promise<Qna> {
    const { title, description, user, date, StudyId } = createQnADto;
    const qna = this.create({
      title,
      description,
      user,
      date,
      isDelete: false,
      StudyId,
    });
    await this.save(qna);
    return qna;
  }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.delete({ StudyId: id });
    if (!result.affected) {
      throw new NotFoundException(`can't find qna with study id : ${id}`);
    }
    return;
  }
}
