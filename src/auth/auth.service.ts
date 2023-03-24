import { Injectable } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './auth.dto';

@Injectable({})
export class AuthService {
  //   signin(data: SignInDTO) {
  //     return { data };
  //   }
  signin() {
    return { msg: 'hello login' };
  }

  signup() {
    return { msg: 'Hello signup' };
  }

  //   signup(data: SignUpDTO) {
  //     return { data };
  //   }
}
