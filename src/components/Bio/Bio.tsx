import React from 'react';

function Bio({ bio }: { bio: string }) {
  return <p className="text-sm">{bio}</p>;
}

export default Bio;
