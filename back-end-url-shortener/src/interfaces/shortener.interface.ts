export interface ShortenerInterface {
  url: string;
}

export interface ShortenerEntity {
  id: number;
  shortId: string;
  originalUrl: string;
  createdAt: Date;
}
