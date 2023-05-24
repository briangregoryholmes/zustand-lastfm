// Helper function to construct the relevant API url

export default function getAPIURL(artistName: string) {
  // Create new url
  const url = new URL('http://ws.audioscrobbler.com/2.0/');

  // Add query params
  url.searchParams.append('method', 'artist.getinfo');

  // In production, we could add better error handling here
  // But we can assume that the API key will always be present in development
  // This is injected by Vercel when deployed
  url.searchParams.append('api_key', process.env.NEXT_PUBLIC_API_KEY!);
  url.searchParams.append('artist', artistName.replace(/-/g, ' '));
  url.searchParams.append('format', 'json');

  return url;
}
