import { ForbiddenException, Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { SignInDTO, SignUpDTO } from './auth.dto';
import * as argon from 'argon2';
import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable({})
export class AuthService {
  constructor(private dbService: DbService) { }

  async signup(request: SignUpDTO) {
    // Hash user password

    try {
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
      return { user };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Email or Username Already Exists');
        } else {
          throw error;
        }
      }
    }
  }

  signin() {
    return { msg: 'Hello signup' };
  }
}
