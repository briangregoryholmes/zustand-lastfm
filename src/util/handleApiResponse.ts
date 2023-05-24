import { ArtistData, APIError } from '@/types/api';

// The Last.fm API returns a custom object when the artist is not found.
export default function handleApiResponse(
  data: ArtistData | APIError
): ArtistData {
  if ('error' in data) {
    throw new Error(data.message);
  }
  return data;
}
