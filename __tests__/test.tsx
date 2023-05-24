import { render, screen } from '@testing-library/react';
import { useArtistDataFetch } from '@/hooks/useArtistDataFetch';
import ArtistPage from '@/pages/artist/[artistName]';
import React from 'react';

// Mock out useRouter
jest.mock('next/router', () => ({
  useRouter() {
    return {
      query: { artistName: 'artist-name' },
    };
  },
}));

// // Mock out useArtistDataFetch
jest.mock('@/hooks/useArtistDataFetch', () => ({
  __esModule: true,
  useArtistDataFetch: jest.fn(),
}));

const mockUseArtistDataFetch = useArtistDataFetch as jest.MockedFunction<
  typeof useArtistDataFetch
>;

describe('ArtistPage', () => {
  beforeEach(() => {
    mockUseArtistDataFetch.mockClear();
  });

  it('displays loading', async () => {
    mockUseArtistDataFetch.mockReturnValue({
      cachedData: null,
      error: null,
      loading: true,
    });

    render(<ArtistPage />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays error', async () => {
    (useArtistDataFetch as jest.Mock).mockReturnValue({
      cachedData: null,
      error: 'Some error occurred',
      loading: false,
    });

    render(<ArtistPage />);

    expect(screen.getByText('Some error occurred')).toBeInTheDocument();
  });

  it('displays data when successfully fetched', async () => {
    (useArtistDataFetch as jest.Mock).mockReturnValue({
      cachedData: {
        artist: {
          name: 'Test Artist',
          tags: { tag: ['genre1', 'genre2'] },
          stats: { listeners: '10000' },
          bio: { summary: 'Test Bio' },
          similar: { artist: [] },
        },
      },
      error: null,
      loading: false,
    });

    render(<ArtistPage />);

    expect(screen.getByText('Test Artist')).toBeInTheDocument();
    expect(screen.getByText('Test Bio')).toBeInTheDocument();
  });
});
