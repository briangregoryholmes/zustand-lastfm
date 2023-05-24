import { Tag } from '@/types/api';

function Genres({ genres }: { genres: Tag[] }) {
  return (
    <div className="flex mx-auto items-center justify-center gap-4">
      {genres.slice(0, 3).map(({ name }) => (
        <p
          className="text-zinc-300 text-center font-semibold text-xs"
          key={name}
        >
          {name}
        </p>
      ))}
    </div>
  );
}

export default Genres;
