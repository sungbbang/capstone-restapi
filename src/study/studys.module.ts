import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { StudyRepository } from './study.repository';
import { StudysController } from './studys.controller';
import { StudysService } from './studys.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudyRepository]), AuthModule],
  controllers: [StudysController],
  providers: [StudysService],
})
export class StudysModule {}
