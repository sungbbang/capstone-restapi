import { IsNotEmpty } from 'class-validator';

export class CreateQnADto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  user: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  StudyId: number;
}
