import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  get kid() {
    return this.prisma.kid;
  }

  async disconnect() {
    await this.prisma.$disconnect();
  }
}
