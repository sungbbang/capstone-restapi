import { PartialType } from '@nestjs/mapped-types';

export class AuthCredentialsDto {
  username: string;
  password: string;
  nickname: string;
  introduce: string;
  area: string;
  category: string;
}

export class AuthLoginDto extends PartialType(AuthCredentialsDto) {}
