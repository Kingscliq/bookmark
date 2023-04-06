import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookMarkDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  link: string;
}
