export const BASE_URL = 'https://api.tvmaze.com/';
export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function searchShowsSWR(query: string | null): string {
  return `${BASE_URL}search/shows?q=${query}`;
}

export function getSingleShowSWR(): string {
  return `${BASE_URL}shows/1`;
}

export function getCastByShowIdSWR(showId: number): string {
  return `${BASE_URL}shows/${showId}/cast`;
}
