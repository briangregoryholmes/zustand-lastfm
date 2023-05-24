import { useState } from 'react';
import { useRouter } from 'next/router';

function SearchField() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(`/artist/${search}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for artist"
        className="w-full px-3 py-2 rounded-lg text-gray-700 focus:outline-none focus:shadow-outline"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 ease-in-out"
      >
        Search
      </button>
    </form>
  );
}

export default SearchField;
