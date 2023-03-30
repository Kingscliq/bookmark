import { AuthService } from './auth/auth.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { DbService } from './db/db.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwtConstants';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      // FIXME : Add Secret from env.
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '2 days' },
    }),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, DbService],
})
export class AppModule {}
