import Head from "next/head";

interface HelmetProps {
  pageTitle: string;
}

export default function Helmet(props: HelmetProps) {
  const { pageTitle } = props;
  return (
    <>
      <Head>
        <title>Terserah Deh! | {pageTitle}</title>
        <meta
          name="description"
          content="Kalau udah ada kata terserah yaudah install Terserah Deh! aja"
        />
        <meta name="image" content="https://i.ibb.co/mqwNJyz/terserah.png" />
        <meta property="og:url" content="https://terserah-deh.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Terserah Deh! | ${pageTitle}`} />
        <meta
          property="og:description"
          content="Kalau udah ada kata terserah yaudah install Terserah Deh! aja"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/mqwNJyz/terserah.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Terserah Deh! | ${pageTitle}`} />
        <meta
          name="twitter:description"
          content="Kalau udah ada kata terserah yaudah install Terserah Deh! aja"
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/mqwNJyz/terserah.png"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
