import { CreateBookMarkDto, EditBookMarkDto } from './bookmark.dto';
import { Injectable } from '@nestjs/common';
import { DbService } from './../../db/db.service';

@Injectable({})
export class BookMarkService {
  constructor(private dbService: DbService) {}

  createBookMark(userId: number, payload: CreateBookMarkDto) {
    console.log(userId, payload);
    return 'Bookmark Created';
  }

  getAllBookmarks(userId: number) {
    console.log(userId);
    return 'All BookMarks';
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
