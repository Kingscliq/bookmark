import { Module } from '@nestjs/common';
import { DbService } from '../../db/db.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../constants/jwtConstants';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../../strategy/jwt.strategy';
import { BookMarkService } from './bookmarks.service';
import { BookMarksController } from './bookmarks.controller';

@Module({
  imports: [
    DbService,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [BookMarksController],
  providers: [BookMarkService, JwtStrategy],
})
export class BookMarkModule {}
