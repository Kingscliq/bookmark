import { AuthService } from './auth/auth.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { DbService } from './db/db.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwtConstants';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './users/users.service';
import { UserController } from './users/users.controller';
@Module({
  imports: [
    ConfigModule.forRoot({}),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '2 days' },
    }),
  ],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService, AuthService, DbService, UserService],
})
export class AppModule {}
