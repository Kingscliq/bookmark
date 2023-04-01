import { UserService } from './users.service';
import { Body, Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    signup() {
        return this.userService.fetchUser();
    }
}
