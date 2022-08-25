import { IsNotEmpty } from 'class-validator';

export class CreateStudyDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  section: string;

  @IsNotEmpty()
  hashtag: string;

  @IsNotEmpty()
  area: string;

  @IsNotEmpty()
  date: string;
}
