import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Script from "next/script";
import { GA_MEASUREMENT_ID } from "../src/components/common/constant";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        id="lazyOnload1"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="lazyOnload2" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
    </>
  );
}

export default MyApp;
