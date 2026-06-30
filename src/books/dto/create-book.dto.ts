import { IsString, IsBoolean, IsOptional, MinLength } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @MinLength(3, { message: 'Название должно содержать минимум 3 символа' })
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @MinLength(2, { message: 'Имя автора должно содержать минимум 2 символа' })
  authors: string;

  @IsBoolean()
  @IsOptional()
  favorite?: boolean;

  @IsString()
  @IsOptional()
  fileCover?: string;

  @IsString()
  @IsOptional()
  fileName?: string;

  @IsString()
  @IsOptional()
  fileBook?: string;
}