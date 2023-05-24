import { Artist } from '@/types/api';
import React from 'react';
import Link from 'next/link';

function SimilarArtists({ data }: { data: Array<Artist> }) {
  return (
    <div>
      <p className="text-2xl mb-4 font-semibold">Similar Artists</p>
      <div className="flex gap-5">
        {data.map((artist) => (
          <div key={artist.name}>
            <Link
              className="bg-blue-500 text-white w-40 h-40 flex items-center justify-center rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 ease-in-out"
              href={`/artist/${artist.name.toLowerCase().replace(/\s/g, '-')}`}
            >
              {artist.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarArtists;
