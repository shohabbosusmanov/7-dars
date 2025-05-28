import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    try {
      return await this.prisma.book.findMany();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async create(body: any) {
    try {
      return await this.prisma.book.create({ data: body });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
