import { jwtConstants } from './../constants/jwtConstants';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private jwtService: JwtService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      SecretOrKey: jwtConstants.secret,
    });
  }

  validate(payload: any) {
    console.log(payload);
    return 'Hello';
  }
}
