import { Injectable } from '@nestjs/common';
import { DbService } from './../../db/db.service';
import { User } from '@prisma/client';

@Injectable({})
export class UserService {
  constructor(private dbService: DbService) {}
  fetchUsers(data: Partial<User>) {
    return data;
  }

  fetchSingleUser(data: Partial<User>) {
    return data;
  }
}
