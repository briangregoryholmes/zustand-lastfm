This is a simple web application built using Next.js demonstrating basic data fetching and caching using Zustand.

The project features dynamic routing on the /artist path, with a second path parameter representing the artist name.

The project uses a custom hook to first check the Zustand store for the requested data. If it is not found, we make a fetch request to the Last.fm public API and cache the returned data in the store. When the client navigates to an artist page they've already visited in that session, the data is pulled from the store instead of the API.
