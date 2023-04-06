import { CreateBookMarkDto, EditBookMarkDto } from './bookmark.dto';
import { Injectable } from '@nestjs/common';
import { DbService } from './../../db/db.service';

@Injectable({})
export class BookMarkService {
  constructor(private dbService: DbService) {}

  async createBookMark(userId: number, payload: CreateBookMarkDto) {
    return 'Bookmark Created';
  }

  async getAllBookmarks(userId: number) {
    const bookmarks = await this.dbService.bookmark.findMany({
      where: {
        userId,
      },
    });

    return bookmarks;
  }

  getBookmarkById(userId: number, bookmarkId: number) {
    return 'Get Bookmark By Id';
  }

  editBookMarkById(userId: number, bookmarkId: number, data: EditBookMarkDto) {
    return 'Edited BookMark';
  }

  deleteBookmarkById(userId: number, bookmarkId: number) {
    return 'Deleted BookMark';
  }
}
