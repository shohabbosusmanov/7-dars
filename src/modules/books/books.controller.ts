import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async getAll() {
    return await this.booksService.getAll();
  }

  @Post()
  async create(@Body() body: any) {
    return await this.booksService.create(body);
  }
}
