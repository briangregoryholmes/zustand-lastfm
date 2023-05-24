import { useState } from 'react';
import { useRouter } from 'next/router';

function SearchField() {
  const router = useRouter();
  // Local state for the search input
  const [search, setSearch] = useState('');

  // Push the user to the artist page with the search input as the artist name
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(`/artist/${search}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center space-x-2 w-2/3 max-w-lg mx-auto mb-6"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for an artist..."
        className="w-full px-3 py-2 rounded-lg text-gray-700 focus:outline-none focus:shadow-outline"
      />
      <button
        type="submit"
        className="bg-sky-300 text-black px-4 py-2 rounded-lg shadow-md hover:bg-sky-400 transition-colors duration-200 ease-in-out"
      >
        Search
      </button>
    </form>
  );
}

export default SearchField;
