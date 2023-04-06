import { BookMarkService } from './endpoints/bookmarks/bookmarks.service';
import { AuthService } from './endpoints/auth/auth.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './endpoints/auth/auth.controller';
import { DbService } from './db/db.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwtConstants';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './endpoints/users/users.service';
import { UserController } from './endpoints/users/users.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy/jwt.strategy';
import { BookMarksController } from './endpoints/bookmarks/bookmarks.controller';
@Module({
  imports: [
    ConfigModule.forRoot({}),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '2 days' },
    }),
  ],
  controllers: [
    AppController,
    AuthController,
    UserController,
    BookMarksController,
  ],
  providers: [
    AppService,
    AuthService,
    DbService,
    UserService,
    BookMarkService,
    JwtStrategy,
  ],
})
export class AppModule {}
