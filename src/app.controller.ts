import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './app.service.js';
import { Book } from './FakeDatabase.js';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }

  @Get("getById/:id")
  getBookById(@Param('id') id: string): Book | undefined {
    const bookId = +id;
    return this.booksService.findBookById(bookId)

  }
}
