import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/decorators';
import { JwtGuard } from './../../guards/jwt.guard';
import { CreateBookMarkDto } from './bookmark.dto';
import { BookMarkService } from './bookmarks.service';

@UseGuards(JwtGuard)
@Controller('api/v1')
export class BookMarksController {
  constructor(private bookMarkServce: BookMarkService) {}

  @Post('bookmarks')
  CreateBookMark(@Body() payload: CreateBookMarkDto) {
    return this.bookMarkServce.createBookMark(payload);
  }

  @Get('bookmarks')
  GetAllBookMarks(@GetUser('id') user: Partial<User>) {
    return this.bookMarkServce.getAllBookmarks();
  }

  @Get('bookmarks')
  GetBookMarkById(@GetUser('id') user: Partial<User>, @Param('id') id: number) {
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
