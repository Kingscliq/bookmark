import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from './../../guards/jwt.guard';
import { GetUser } from './../../decorators';
import { User } from '@prisma/client';
import { BookMarkService } from './bookmarks.service';

@UseGuards(JwtGuard)
@Controller('api/v1')
export class BookMarksController {
  constructor(private bookMarkServce: BookMarkService) {}
  
  @Get('bookmarks')
  GetAllBooMarks() {
    return this.bookMarkServce.getAllBookMarks(user);
  }

  @Get('bookmarks')
  GetBookMarkById(@Req() req: Request) {
    console.log({ user: req.user });
    return this.bookMarkServce.fetchSingleUser(req.user);
  }
}
