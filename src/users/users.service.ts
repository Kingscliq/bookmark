import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { JwtService } from '@nestjs/jwt';

@Injectable({})
export class UserService {
  constructor(private dbService: DbService, private jwtService: JwtService) {}
  fetchUser() {
    return 'hello User';
  }

  fetchSingleUser() {
    return 'hello Single User';
  }
}
