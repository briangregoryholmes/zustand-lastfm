import { create } from 'zustand';
import { ArtistData } from '@/types/api';

// Structure for the store
export interface Store {
  artistData: Record<string, ArtistData>;
  actions: {
    setArtistData: (artistName: string, data: ArtistData) => void;
  };
}

// Implementation of the store
const useStore = create<Store>((set) => ({
  artistData: {},
  actions: {
    setArtistData: (artistName, data) =>
      set((state) => ({
        artistData: {
          ...state.artistData,
          [artistName]: data,
        },
      })),
  },
}));

// Not entirely necessary with smaller stores, but it's good practice to
// abstract the store's actions away from the store itself.
// And also export relevant access points individually using "selectors"
export const useActions = () => useStore((state) => state.actions);

// Artist data selector
export const useArtistData = (artist: string) =>
  useStore((state) => {
    const found = state.artistData[artist];
    return found ? found : null;
  });
