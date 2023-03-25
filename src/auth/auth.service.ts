import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { SignInDTO, SignUpDTO } from './auth.dto';

@Injectable({})
export class AuthService {
  constructor(private dbService: DbService) {}

  signin(request: SignInDTO) {
    console.log(request);
    return { msg: 'hello login' };
  }

  signup() {
    return { msg: 'Hello signup' };
  }

  //   signup(data: SignUpDTO) {
  //     return { data };
  //   }
}
