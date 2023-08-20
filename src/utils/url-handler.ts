export function decodeUrl(url: string): string {
  return url.replace(/ /g, '-').toLocaleLowerCase();
}

export function encodeUrl(url: string): string {
  return url.replace(/-/g, '%20').toLocaleLowerCase();
}
