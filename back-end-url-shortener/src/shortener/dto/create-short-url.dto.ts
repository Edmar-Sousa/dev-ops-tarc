/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsUrl, IsNotEmpty } from 'class-validator';

export class CreateShortUrlDto {
  @IsUrl()
  @IsNotEmpty()
  url: string;
}
