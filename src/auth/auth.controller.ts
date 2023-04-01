import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './auth.dto';

@Controller('api/v1')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signin(@Body() req: SignInDTO) {
    return this.authService.signin(req);
  }

  @Post('signup')
  signup(@Body() req: SignUpDTO) {
    return this.authService.signup(req);
  }
}
