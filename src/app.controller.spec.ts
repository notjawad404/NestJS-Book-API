import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './app.controller.js';
import { BooksService } from './app.service.js';

describe('BooksController', () => {
  let booksController: BooksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();

    booksController = app.get<BooksController>(BooksController);
  });

  describe('getAllBooks', () => {
    it('should return the full book list', () => {
      expect(booksController.getAllBooks().length).toBeGreaterThan(0);
    });
  });
});
