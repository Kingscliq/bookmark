import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { SignInDTO, SignUpDTO } from './auth.dto';
import * as argon from 'argon2';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable({})
export class AuthService {
  constructor(private dbService: DbService) { }

  async signup(request: SignUpDTO) {
    // Hash user password
    const hash = await argon.hash(request.password);

    // Create the user
    const user = await this.dbService.user.create({
      data: {
        username: request.username,
        hash,
        firstName: request.firstName,
        lastName: request.lastName,
        email: request.email,
      },
    });
    // Save User in the database

    delete user.hash;
    console.log(user);
    return { user };
  }

  signin() {
    return { msg: 'Hello signup' };
  }

  //   signup(data: SignUpDTO) {
  //     return { data };
  //   }
}
