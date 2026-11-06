import { Injectable } from '@nestjs/common';
import { books } from './FakeDatabase.js';
import type { Book } from './FakeDatabase.js';

@Injectable()
export class BooksService {
  // getBook(): string {
  //   return 'Welcome to the Book API!';
  // }

  getAllBooks(): Book[] {
    return books;
  }

  findBookById(bookId: number): Book | undefined {
    return books.find((book) => book.id === bookId);
  }

  createBook(bookData: Partial<Book>): Book {
    const newID = books[books.length - 1].id + 1;
    const newBook: Book = {
      id: newID,
      title: bookData.title ?? '',
      author: bookData.author ?? '',
      publishedYear: bookData.publishedYear ?? 0,
    };
    books.push(newBook);
    return books[books.length - 1];
  }

  updateBook(bookID: number, bookData: Partial<Book>): Book | undefined {
    const bookIndex = books.findIndex((book) => book.id === bookID);

    if (bookIndex === -1) {
      return undefined;
    }

    const existingBook = books[bookIndex];
    const updatedBook: Book = {
      id: bookID,
      title: bookData.title ?? existingBook.title,
      author: bookData.author ?? existingBook.author,
      publishedYear: bookData.publishedYear ?? existingBook.publishedYear,
    };

    books[bookIndex] = updatedBook;
    return updatedBook;
  }

  deleteBook(bookID: number): boolean {
    const bookIndex = books.findIndex((book) => book.id === bookID);

    if (bookIndex === -1) {
      return false;
    }

    books.splice(bookIndex, 1);
    return true;
  }
}
