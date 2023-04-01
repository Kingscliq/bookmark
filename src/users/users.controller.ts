import { UserService } from './users.service';
import { Controller, Get } from '@nestjs/common';

@Controller('api/v1')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('users')
  fetchAllUsers() {
    return this.userService.fetchUser();
  }
  @Get('users')
  fetchSingleUsers() {
    return this.userService.fetchUser();
  }
}
