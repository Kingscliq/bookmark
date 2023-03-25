import { AuthService } from './auth.service';
import { Controller, Post } from '@nestjs/common';
import { SignInDTO } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signin(req: SignInDTO) {
    return this.authService.signin(req);
  }

  @Post('signup')
  signup() {
    return this.authService.signup();
  }
}
