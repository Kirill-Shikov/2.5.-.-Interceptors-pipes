import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { ValidationPipe } from '../common/pipes/validation.pipe';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const book = this.booksService.findOne(Number(id));
    if (!book) {
      throw new Error('Книга не найдена');
    }
    return book;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: any) {
    const updated = this.booksService.update(Number(id), updateData);
    if (!updated) {
      throw new Error('Книга не найдена');
    }
    return updated;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const deleted = this.booksService.remove(Number(id));
    if (!deleted) {
      throw new Error('Книга не найдена');
    }
    return { message: 'ok' };
  }
}