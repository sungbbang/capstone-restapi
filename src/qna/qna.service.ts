import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQnADto } from './dto/create-qna.dto';
import { QnaRepository } from './qna.repository';
import { Qna } from './qna.entity';

@Injectable()
export class QnaService {
  constructor(
    @InjectRepository(QnaRepository)
    private qnaRepository: QnaRepository,
  ) {}

  getAllBoard(id: number): Promise<Qna[]> {
    return this.qnaRepository.getAllBoard(id);
  }

  createBoard(createQnADto: CreateQnADto): Promise<Qna> {
    return this.qnaRepository.createBoard(createQnADto);
  }

  deleteBoard(id: number): Promise<void> {
    return this.qnaRepository.deleteBoard(id);
  }
}
