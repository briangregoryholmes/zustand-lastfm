import React from 'react';

function Bio({ bio }: { bio: string }) {
  // Remove the Last.fm link from the bio
  const strippedBio = bio.replace(/<a\b[^>]*>(.*?)<\/a>/i, '');
  return <p className="text-sm mb-4 text-zinc-300">{strippedBio}</p>;
}

export default Bio;
