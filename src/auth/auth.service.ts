import { ForbiddenException, Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { SignInDTO, SignUpDTO } from './auth.dto';
import * as argon from 'argon2';
import { Prisma } from '@prisma/client';

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

      return user;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Email or Username Already Exists');
        }
      }

      throw error;
    }
  }

  async signin(req: SignInDTO) {
    try {
      // Check for user on the db
      const user = await this.dbService.user.findUnique({
        where: {
          email: req.email,
        },
      });

      // throw exception if user not foun

      const password = await argon.verify(req.password, user.hash);
      if (!password || !user) {
        throw new ForbiddenException('Invalid Credentials');
      }
      delete user.hash;

      return user;
    } catch (error) {
      console.log(error);
    }
    return { msg: 'Hello signup' };
  }
}
