import { Module } from '@nestjs/common';
import { dbService } from './db.service';

@Module({
  imports: [],
  controllers: [],
  providers: [dbService],
})
export class AppModule {}
