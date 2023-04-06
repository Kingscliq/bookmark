import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from './../../guards/jwt.guard';
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
