import { Genres } from '@/components';
import { Tag } from '@/types/api';

function Header({
  name,
  listeners,
  genres,
}: {
  name: string;
  listeners: string;
  genres: Tag[];
}) {
  return (
    <div className="flex-col justify-center items-center mx-auto mb-6 font-black">
      <h1 className="text-6xl text-center">{name}</h1>
      <Genres genres={genres} />
      <p className="text-center text-sky-300">{listeners} listeners</p>
    </div>
  );
}

export default Header;
