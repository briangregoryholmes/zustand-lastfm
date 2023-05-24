import { Bio, Header, SimilarArtists } from '@/components';
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
        <div className="flex-col max-w-3xl mx-auto">
          <Header
            name={cachedData.artist?.name}
            genres={cachedData.artist?.tags?.tag}
            listeners={cachedData.artist?.stats?.listeners}
          />
          <Bio bio={cachedData.artist?.bio?.summary} />
          <SimilarArtists data={cachedData.artist?.similar?.artist} />
        </div>
      )}
    </>
  );
}
