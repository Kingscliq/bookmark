import { Injectable } from '@nestjs/common';
import { DbService } from './../../db/db.service';

@Injectable({})
export class BookMarkService {
  constructor(private dbService: DbService) {}

  getAllBookmarks() {
    return 'All BookMarks';
  }

  getBookmarkById() {
    return 'Get Bookmark By Id';
  }

  createBookMark() {
    return 'Bookmark Created';
  }

  editBookMarkById() {
    return 'Edited BookMark';
  }

  deleteBookmarkById() {
    return 'Deleted BookMark';
  }
}
