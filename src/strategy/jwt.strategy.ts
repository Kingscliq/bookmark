import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { jwtConstants } from '../constants/jwtConstants';
import { User } from '@prisma/client';
import { DbService } from '../db/db.service';
import { Observable } from 'rxjs';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private jwtService: JwtService, private dbService: DbService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(
    payload: User,
  ): Promise<Partial<User> | Observable<Partial<User>>> {
    const user = await this.dbService.user.findUnique({
      where: {
        id: payload.id,
      },
    });
    const { hash, ...rest } = user;
    return rest;
  }
}
