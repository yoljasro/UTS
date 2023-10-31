//next
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
//react
import { useEffect, useRef } from "react";
//next-intl
import { NextIntlProvider } from "next-intl";
//component
//material ui
//sass
import "../styles/globals.sass";
// next progresbar
import NextNProgress from "nextjs-progressbar";
// yandex metrica
import { YandexMetricaProvider } from 'next-yandex-metrica';

type PagePropsType = {
  messages: typeof import("../messages/uz.json");
};



const usePreviousRoute = () => {
  const { asPath } = useRouter();

  const ref = useRef<string | null>(null);

  useEffect(() => {
    ref.current = asPath;
  }, [asPath]);

  return ref.current;
};


function MyApp({ Component, pageProps }: AppProps<PagePropsType>) {
  const previousRoute = usePreviousRoute();

  return (
    <>
      <YandexMetricaProvider
        tagID={95422993}
        initParameters={{ clickmap: true, trackLinks: true, accurateTrackBounce: true }}
      >
        <NextIntlProvider messages={pageProps.messages}>
          <NextNProgress />
          <Component {...pageProps} {...{ previousRoute: previousRoute }} />
        </NextIntlProvider>
      </YandexMetricaProvider>
    </>
  );
}

export default MyApp;

export async function getStaticPaths() {
  return {
    paths: [], 
    fallback: 'blocking',
  };
}