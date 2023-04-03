import { UserService } from './users.service';
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from 'src/guards/jwt.guard';

@UseGuards(JwtGuard)
@Controller('api/v1')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('users')
  fetchAllUsers(@Req() req: Request) {
    return this.userService.fetchUsers(req.user);
  }

  @Get('user')
  fetchSingleUsers(@Req() req: Request) {
    console.log({ user: req.user });
    return this.userService.fetchSingleUser(req.user);
  }
}
