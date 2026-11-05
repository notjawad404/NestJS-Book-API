import { Controller, Get } from '@nestjs/common';
import { BooksService } from './app.service.js';
import { Book } from './FakeDatabase.js';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }
}
