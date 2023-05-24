import { useState, useEffect, useCallback } from 'react';
import { useActions, useArtistData } from '@/stores/zustand';
import { ArtistData, APIError } from '@/types/api';
import { getAPIURL, handleApiResponse } from '@/util';

export const useArtistDataFetch = (artistName: string) => {
  // Check the Zustand store for cached data
  const cachedData = useArtistData(artistName);
  const { setArtistData } = useActions();

  // Local state for loading and error handling
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchAlbum = useCallback(async () => {
    try {
      // Helper function to construct the relevant API url
      const url = getAPIURL(artistName);
      const res = await fetch(url, { mode: 'cors' });
      const data: ArtistData | APIError = await res.json();

      // Ensure that the data is valid
      const validData = handleApiResponse(data);

      // Cache the data in the Zustand store
      setArtistData(artistName, validData);
      setError(null);
    } catch (error) {
      // If there's an error, set the error state
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, [setArtistData, artistName]);

  useEffect(() => {
    if (!cachedData && artistName) {
      fetchAlbum();
    } else {
      setLoading(false);
    }
  }, [cachedData, fetchAlbum, artistName]);

  return { cachedData, error, loading };
};
