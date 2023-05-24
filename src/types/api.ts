// These are the types for the Last.fm API once the result has been deserialized

export interface ArtistData {
  artist: Artist;
}

export interface Artist {
  name: string;
  mbid: string;
  url: string;
  image: Image[];
  streamable: string;
  ontour: string;
  stats: Stats;
  tags: { tag: Tag[] };
  bio: Bio;
  similar: { artist: Artist[] };
}

export interface Tag {
  name: string;
  url: string;
}

// Last.fm returns a custom object when the artist is not found
export type APIError = {
  error: number;
  message: string;
};

interface Link {
  '#text': string;
  rel: string;
  href: string;
}

interface Bio {
  links: { link: Link };
  published: string;
  summary: string;
  content: string;
}

interface Image {
  '#text': string;
  size: string;
}

interface Stats {
  listeners: string;
  playcount: string;
}
