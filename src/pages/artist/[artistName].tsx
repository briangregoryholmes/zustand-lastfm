import { Bio, Genres, Header, SimilarArtists } from '@/components';
import { useRouter } from 'next/router';
import { useArtistDataFetch } from '@/hooks/useArtistDataFetch';

export default function ArtistPage() {
  const router = useRouter();
  // Destructure the artistName from the URL queries
  const { artistName } = router.query as { artistName: string };
  // Custom hook for handling the data fetching/caching/Zustand store
  const { cachedData, error, loading } = useArtistDataFetch(artistName);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {error || !cachedData ? (
        <p>{error}</p>
      ) : (
        <>
          <Header
            name={cachedData.artist?.name}
            listeners={cachedData.artist?.stats?.listeners}
          />
          <Bio bio={cachedData.artist?.bio?.summary} />
          <Genres genres={cachedData.artist?.tags?.tag} />
          <SimilarArtists data={cachedData.artist?.similar?.artist} />
        </>
      )}
    </>
  );
}
