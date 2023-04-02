import { UserService } from './users.service';
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { JwtGuard } from 'src/guards/jwt.guard';

UseGuards(JwtGuard);
@Controller('api/v1')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('users')
  fetchAllUsers() {
    return this.userService.fetchUsers();
  }

  @Get('user')
  fetchSingleUsers(@Req() req: Request) {
    console.log({ user: req.user });
    return this.userService.fetchSingleUser();
  }
}
