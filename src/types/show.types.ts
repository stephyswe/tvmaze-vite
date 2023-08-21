export interface TVShow {
  score: number;
  show: Show;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number | null;
  averageRuntime: number | null;
  premiered: string | null;
  ended: string | null;
  officialSite: string | null;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network | null;
  webChannel: WebChannel | null;
  dvdCountry: null;
  externals: Externals;
  image: Image;
  summary: string | null;
  updated: number;
  _links: Links;
}

export interface Schedule {
  time: string;
  days: string[];
}

export interface Rating {
  average: number | null;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string | null;
}

export interface WebChannel {
  id: number;
  name: string;
  country: Country | null;
  officialSite: string | null;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Externals {
  tvrage: number | null;
  thetvdb: number | null;
  imdb: string | null;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Links {
  self: {
    href: string;
  };
  previousepisode?: {
    href: string;
  };
}
