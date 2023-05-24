import { Tag } from '@/types/api';

function Genres({ genres }: { genres: Tag[] }) {
  return (
    <>
      {genres.map(({ name }) => (
        <p key={name}>{name}</p>
      ))}
    </>
  );
}

export default Genres;
