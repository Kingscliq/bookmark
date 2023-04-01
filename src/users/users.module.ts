import { JwtStrategy } from './../strategy/jwt.strategy';
import { Module } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants/jwtConstants';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    DbService,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy],
})
export class AuthModule {}
