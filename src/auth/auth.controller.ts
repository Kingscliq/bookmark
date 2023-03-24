import { AuthService } from './auth.service';
import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signin() {
    return this.authService.signin();
  }

  @Post('signup')
  signup() {
    return this.authService.signup();
  }
}
