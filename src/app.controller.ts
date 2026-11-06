import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './app.service.js';
import type { Book } from './FakeDatabase.js';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }

  @Get('getById/:id')
  getBookById(@Param('id') id: string): Book | undefined {
    const bookId = +id;
    return this.booksService.findBookById(bookId);
  }

  @Post()
  addBook(@Body() book: Partial<Book>): Book {
    const bookData = book;

    if (!bookData.title || !bookData.author || !bookData.publishedYear) {
      throw new Error('Missing required book data');
    }
    return this.booksService.createBook(bookData);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() book: Partial<Book>): Book {
    const updatedBook = this.booksService.updateBook(+id, book);

    if (!updatedBook) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }

    return updatedBook;
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string): { message: string } {
    const deleted = this.booksService.deleteBook(+id);

    if (!deleted) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }

    return { message: 'Book deleted successfully' };
  }
}
