import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';

export interface Book {
  id: number;
  title: string;
  authors: string;
  description?: string;
  favorite?: boolean;
  fileCover?: string;
  fileName?: string;
  fileBook?: string;
}

@Injectable()
export class BooksService {
  private books: Book[] = [];
  private currentId = 1;

  create(createBookDto: CreateBookDto): Book {
    const newBook: Book = {
      id: this.currentId++,
      ...createBookDto,
      favorite: createBookDto.favorite || false,
    };
    this.books.push(newBook);
    return newBook;
  }

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book | null {
    return this.books.find(book => book.id === id) || null;
  }

  update(id: number, updateData: Partial<Book>): Book | null {
    const book = this.findOne(id);
    if (book) {
      Object.assign(book, updateData);
      return book;
    }
    return null;
  }

  remove(id: number): boolean {
    const index = this.books.findIndex(book => book.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
      return true;
    }
    return false;
  }
}