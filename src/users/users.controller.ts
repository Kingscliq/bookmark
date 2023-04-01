import { UserService } from './users.service';
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('api/v1')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('users')
  fetchAllUsers() {
    return this.userService.fetchUsers();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('user')
  fetchSingleUsers(@Req() req: Request) {
    console.log({ user: req.user });
    return this.userService.fetchSingleUser();
  }
}
