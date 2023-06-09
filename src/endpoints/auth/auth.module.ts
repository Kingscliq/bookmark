import { Module } from '@nestjs/common';
import { DbService } from '../../db/db.service';
import { JwtStrategy } from '../../strategy/jwt.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
@Module({
  imports: [DbService],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
