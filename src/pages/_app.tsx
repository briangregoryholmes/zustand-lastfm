import { type AppType } from 'next/app';
import { Layout } from '@/components';
import '@/styles/globals.css';
import Head from 'next/head';

const App: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <>
      <Head>
        <title>Everyrealm Takehome</title>
        <meta name="description" content="music-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
