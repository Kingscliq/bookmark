import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/decorators';
import { JwtGuard } from './../../guards/jwt.guard';
import { CreateBookMarkDto, EditBookMarkDto } from './bookmark.dto';
import { BookMarkService } from './bookmarks.service';

@UseGuards(JwtGuard)
@Controller('api/v1/bookmarks')
export class BookMarksController {
  constructor(private bookMarkServce: BookMarkService) {}

  @Post()
  CreateBookMark(@Body() payload: CreateBookMarkDto) {
    return this.bookMarkServce.createBookMark(payload);
  }

  @Get()
  GetAllBookMarks(@GetUser('id') userId: number) {
    return this.bookMarkServce.getAllBookmarks();
  }

  @Get(':id')
  GetBookMarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {
    return this.bookMarkServce.getBookmarkById();
  }

  @Patch(':id')
  EditBookMarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
    @Body('id') req: EditBookMarkDto,
  ) {
    return this.bookMarkServce.editBookMarkById();
  }

  @Delete(':id')
  DeleteBookMarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {
    return this.bookMarkServce.deleteBookmarkById();
  }
}
