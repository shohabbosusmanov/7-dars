import {
  InternalServerErrorException,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export class PrismaService extends PrismaClient implements OnModuleInit {
  logger: Logger = new Logger(PrismaService.name, { timestamp: true });
  async onModuleInit() {
    try {
      await this.$connect();

      this.logger.log('prisma connected');
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
