import { Module } from '@nestjs/common';
import { StudysModule } from './study/studys.module';
import { typeORMConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), StudysModule, AuthModule],
})
export class AppModule {}
