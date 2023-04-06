import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

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

export class EditBookMarkDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  link: string;
}
