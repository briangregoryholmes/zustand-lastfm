## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This is a simple web application demonstrating basic data fetching and caching using Zustand.

The project uses a custom hook to check the Zustand store for the requested data. If it is not found, we make a fetch request to the Last.fm public API and cache the returned data in the store. When the client navigates to an artist page they've already visited in that session, the data is pulled from the store instead of the API.
