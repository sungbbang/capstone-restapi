import { Module } from '@nestjs/common';
import { QnaService } from './qna.service';
import { QnaController } from './qna.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QnaRepository } from './qna.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([QnaRepository]), AuthModule],
  providers: [QnaService],
  controllers: [QnaController],
})
export class QnaModule {}
