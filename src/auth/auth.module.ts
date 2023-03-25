import { Module } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [DbService],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
