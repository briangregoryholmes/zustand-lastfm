import { Artist } from '@/types/api';
import React from 'react';
import Link from 'next/link';

function SimilarArtists({ data }: { data: Array<Artist> }) {
  return (
    <div>
      <p className="text-2xl mb-4 font-semibold">Similar Artists</p>
      <div className="flex w-full gap-4">
        {data.slice(0, 3).map((artist) => (
          <div key={artist.name}>
            <Link
              className="bg-zinc-800 text-white border-sky-300 border font-black w-fit p-2 flex items-center justify-center rounded-lg shadow-md hover:bg-sky-800 transition-colors duration-200 ease-in-out"
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
