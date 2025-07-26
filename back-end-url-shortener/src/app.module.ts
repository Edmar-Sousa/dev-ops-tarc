import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ShortenerController } from './shortener/shortener.controller';
import { HealtCheckController } from './healtcheck/healtcheck.controller';

import { ShortenerService } from './shortener/shortener.service';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [ShortenerController, HealtCheckController],
  providers: [ShortenerService, PrismaService],
})
export class AppModule {}
