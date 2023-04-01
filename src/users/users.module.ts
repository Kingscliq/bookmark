import { Module } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { UserController } from './users.controller';
import { UserService } from './users.service';

@Module({
  imports: [DbService],
  controllers: [UserController],
  providers: [UserService],
})
export class AuthModule {}
