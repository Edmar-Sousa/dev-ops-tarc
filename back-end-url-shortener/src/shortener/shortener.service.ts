import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

import { generateShortCode } from '../utils/hash';
import { ShortenerEntity } from '../interfaces/shortener.interface';

@Injectable()
export class ShortenerService {
  constructor(private prisma: PrismaService) {}

  async create(original: string): Promise<ShortenerEntity> {
    const shortId = generateShortCode(original);

    const entity = await this.prisma.url.create({
      data: { originalUrl: original, shortId },
    });

    return entity;
  }

  async findByShortUrl(shortenUrl: string): Promise<ShortenerEntity | null> {
    const entity = await this.prisma.url.findUnique({
      where: { shortId: shortenUrl },
    });

    return entity;
  }
}
