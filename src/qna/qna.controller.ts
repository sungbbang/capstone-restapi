import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateQnADto } from './dto/create-qna.dto';
import { Qna } from './qna.entity';
import { QnaService } from './qna.service';

@Controller('qna')
export class QnaController {
  constructor(private qnaService: QnaService) {}

  @Get('/:id')
  getAllBoard(@Param('id', ParseIntPipe) id: number): Promise<Qna[]> {
    return this.qnaService.getAllBoard(id);
  }

  @Post('/')
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  createBoard(@Body() createQnADto: CreateQnADto): Promise<Qna> {
    return this.qnaService.createBoard(createQnADto);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard())
  deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.qnaService.deleteBoard(id);
  }
}
