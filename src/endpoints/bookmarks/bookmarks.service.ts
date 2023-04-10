import { CreateBookMarkDto, EditBookMarkDto } from './bookmark.dto';
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DbService } from './../../db/db.service';

@Injectable({})
export class BookMarkService {
  constructor(private dbService: DbService) {}

  async createBookMark(userId: number, payload: CreateBookMarkDto) {
    try {
      const bookmark = await this.dbService.bookmark.create({
        data: {
          userId,
          ...payload,
        },
      });

      return bookmark;
    } catch (error) {
      return new BadRequestException('Invalid title or Link');
    }
  }

  async getAllBookmarks(userId: number) {
    const bookmarks = await this.dbService.bookmark.findMany({
      where: {
        userId,
      },
    });

    return bookmarks;
  }

  async getBookmarkById(userId: number, bookmarkId: number) {
    try {
      const bookmark = await this.dbService.bookmark.findFirst({
        where: {
          id: bookmarkId,
          userId,
        },
      });
      return bookmark;
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  async editBookMarkById(
    userId: number,
    bookmarkId: number,
    data: EditBookMarkDto,
  ) {
    const bookmark = await this.dbService.bookmark.findUnique({
      where: {
        id: bookmarkId,
      },
    });

    if (!bookmark || bookmark.userId !== userId) {
      throw new ForbiddenException('Access to Resource Denied');
    }
    const updatedBookmark = await this.dbService.bookmark.update({
      where: {
        id: bookmarkId,
      },
      data: {
        ...data,
      },
    });

    return updatedBookmark;
  }

  async deleteBookmarkById(userId: number, bookmarkId: number) {
    const bookmark = await this.dbService.bookmark.findUnique({
      where: {
        id: bookmarkId,
      },
    });

    if (!bookmark || bookmark.userId !== userId) {
      throw new ForbiddenException('Access to Resource Denied');
    }

    const deletedBookmark = await this.dbService.bookmark.delete({
      where: {
        id: bookmarkId,
      },
    });
    return deletedBookmark;
  }
}
