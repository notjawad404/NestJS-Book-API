import { Injectable } from '@nestjs/common';
import { Book, books } from './FakeDatabase.js';

@Injectable()
export class BooksService {
  // getBook(): string {
  //   return 'Welcome to the Book API!';
  // }

  
  getAllBooks(): Book[] {
    return books;
  }

  findBookById(bookId: number): Book | undefined {
    return books.find(book => book.id === bookId)
  }
}
