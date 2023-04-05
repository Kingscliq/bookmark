import { Controller, Delete, Get, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from './../../guards/jwt.guard';
import { GetUser } from './../../decorators';
import { User } from '@prisma/client';
import { BookMarkService } from './bookmarks.service';

@UseGuards(JwtGuard)
@Controller('api/v1')
export class BookMarksController {
  constructor(private bookMarkServce: BookMarkService) {}

  @Post('bookmarks')
  CreateBookMark() {
    return this.bookMarkServce.createBookMark();
  }

  @Get('bookmarks')
  GetAllBookMarks() {
    return this.bookMarkServce.getAllBookmarks();
  }

  @Get('bookmarks')
  GetBookMarkById() {
    return this.bookMarkServce.getBookmarkById();
  }

  @Patch('bookmarks')
  EditBookMarkById() {
    return this.bookMarkServce.editBookMarkById();
  }

  @Delete('bookmarks')
  DeleteBookMarkById() {
    return this.bookMarkServce.deleteBookmarkById();
  }
}
