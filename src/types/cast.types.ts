export interface Image {
  medium: string;
  original: string;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Link {
  href: string;
}

export interface Links {
  self: Link;
}

export interface Person {
  id: number;
  url: string;
  name: string;
  country: Country;
  birthday: string;
  deathday: string | null;
  gender: 'Male' | 'Female';
  image: Image;
  updated: number;
  _links: Links;
}

export interface Character {
  id: number;
  url: string;
  name: string;
  image: Image;
  _links: Links;
}

export interface CastMember {
  person: Person;
  character: Character;
  self: boolean;
  voice: boolean;
}
