import {appWithTranslation, useTranslation} from 'next-i18next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import ThemeProvider from 'theme/ThemeProvider';

// animate css
import 'animate.css';
// import swiper css
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
// video player css
import 'plyr-react/plyr.css';
// glightbox css
import 'glightbox/dist/css/glightbox.css';
// custom scrollcue css
import 'plugins/scrollcue/scrollCue.css';
// Bootstrap and custom scss
import 'assets/scss/style.scss';

// custom css by Gen
import "./programs/peq/peq-style.css"
import {NextPage} from "next";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  // added bootstrap functionality
  useEffect(() => {
    if (typeof window !== 'undefined') import('bootstrap');
  }, []);

  // scroll animation added
  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({ interval: -400, duration: 700, percentage: 0.8 });
      scrollCue.update();
    })();
  }, [pathname]);

  // manage loading status
  useEffect(() => setLoading(false), []);

  return (
      <Fragment>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>MIEC - 蒙特利尔国际教育中心</title>
        </Head>

        <ThemeProvider>
          {loading ? (
              <div className="page-loader" />
          ) : (
              <TranslationWrapper Component={Component} pageProps={pageProps} />
          )}
        </ThemeProvider>
      </Fragment>
  );
}

function TranslationWrapper({ Component, pageProps }: { Component: NextPage, pageProps: any }) {
  const { t, ready } = useTranslation();

  if (!ready) {
    return <div className="page-loader"/>;
  }

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);