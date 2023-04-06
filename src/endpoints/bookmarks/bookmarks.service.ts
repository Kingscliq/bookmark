import { CreateBookMarkDto } from './bookmark.dto';
import { Injectable } from '@nestjs/common';
import { DbService } from './../../db/db.service';

@Injectable({})
export class BookMarkService {
  constructor(private dbService: DbService) {}

  createBookMark(payload: CreateBookMarkDto) {
    console.log(payload);
    return 'Bookmark Created';
  }

  getAllBookmarks() {
    return 'All BookMarks';
  }

  getBookmarkById() {
    return 'Get Bookmark By Id';
  }

  editBookMarkById() {
    return 'Edited BookMark';
  }

  deleteBookmarkById() {
    return 'Deleted BookMark';
  }
}
