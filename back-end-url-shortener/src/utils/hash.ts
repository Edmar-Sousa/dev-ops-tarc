function jenkinsOneAtATimeHash(url: string) {
  let hash = 0;

  for (let i = 0; i < url.length; i++) {
    hash += url.charCodeAt(i);
    hash += hash << 10;
    hash ^= hash >> 6;
  }

  hash += hash << 3;
  hash ^= hash >> 11;
  hash += hash << 15;

  return hash >>> 0;
}

function toBase62(num: number) {
  const chars =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';

  if (num === 0) return '0';

  while (num > 0) {
    result = chars[num % 62] + result;
    num = Math.floor(num / 62);
  }

  return result;
}

export function generateShortCode(url: string) {
  const hash = jenkinsOneAtATimeHash(url);
  const base62 = toBase62(hash);

  if (base62.length < 6) return base62.padStart(6, '0');
  if (base62.length > 6) return base62.slice(6);

  return base62;
}
