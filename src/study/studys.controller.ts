import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateStudyDto } from './dto/create-study.dto';
import { StudyStatus } from './study-status.enum';
import { StudysService } from './studys.service';
import { StudyStatusValidationPipe } from './pipes/study-status-validation.pipe';
import { Study } from './study.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';

@Controller('Studys')
@UseGuards(AuthGuard())
export class StudysController {
  private logger = new Logger('StudyController');
  constructor(private studysService: StudysService) {}

  @Get('/')
  getAllStudy(@GetUser() user: User): Promise<Study[]> {
    this.logger.verbose(`${user.username} trying to get all Studys`);
    return this.studysService.getAllStudys(user);
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  createStudy(
    @Body() createStudyDto: CreateStudyDto,
    @GetUser() user: User,
  ): Promise<Study> {
    this.logger.verbose(
      `${user.username} creating a new Study. Payload: ${JSON.stringify(
        createStudyDto,
      )}`,
    );
    return this.studysService.createStudy(createStudyDto, user);
  }

  @Get('/:id')
  getStudyById(@Param('id') id: number): Promise<Study> {
    return this.studysService.getStudyById(id);
  }

  @Delete('/:id')
  deleteStudy(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<void> {
    return this.studysService.deleteStudy(id, user);
  }

  @Patch('/:id/status')
  updateStudyStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', StudyStatusValidationPipe) status: StudyStatus,
  ) {
    return this.studysService.updateStudyStatus(id, status);
  }

  @Patch('/:id/users')
  updateStudyUsers(
    @Param('id', ParseIntPipe) id: number,
    @Body('users') user: string,
  ) {
    return this.studysService.updateStudyUsers(id, user);
  }
}
