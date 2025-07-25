import { Body, Controller, Post, Get, Param, Response } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { Response as Res } from 'express';

import { ShortenerService } from './shortener.service';
import { CreateShortUrlDto } from './dto/create-short-url.dto';

@Controller('shortener')
export class ShortenerController {
  constructor(
    private readonly shortenerService: ShortenerService,
    private readonly configService: ConfigService,
  ) {}

  @Post()
  async shorten(@Response() response: Res, @Body() body: CreateShortUrlDto) {
    const urlShortened = await this.shortenerService.create(body.url);
    const appUrl = this.configService.get<string>('APP_URL');

    return response
      .setHeader('Location', `${appUrl}/shorten/${urlShortened.shortId}`)
      .status(201)
      .json(urlShortened);
  }

  @Get(':shortUrl')
  async unShorten(
    @Response() response: Res,
    @Param('shortUrl') shortUrl: string,
  ) {
    const urlShortened = await this.shortenerService.findByShortUrl(shortUrl);

    if (!urlShortened)
      return response.status(404).json({ message: 'Url não encontrada' });

    return response.status(302).redirect(urlShortened?.originalUrl);
  }
}
