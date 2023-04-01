import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { JwtService } from '@nestjs/jwt';

@Injectable({})
export class UserService {
  constructor(private dbService: DbService, private jwtService: JwtService) {}
  fetchUsers() {
    return 'hello Users';
  }

  fetchSingleUser() {
    return 'hello Single User';
  }
}
