import {appWithTranslation} from 'next-i18next';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {Fragment, useEffect, useState} from 'react';
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
import "./programs/Immigration/peq/peq-style.scss"
import {Analytics} from "@vercel/analytics/react";

// import 'components/MIEC/PdfReader.css';

function MyApp({Component, pageProps}: AppProps) {
    const {pathname} = useRouter();
    const [loading, setLoading] = useState(true);

    // added bootstrap functionality
    useEffect(() => {
        if (typeof window !== 'undefined') import('bootstrap');
    }, []);

    // scroll animation added
    useEffect(() => {
        (async () => {
            const scrollCue = (await import('plugins/scrollcue')).default;
            scrollCue.init({interval: -400, duration: 700, percentage: 0.8});
            scrollCue.update();
        })();
    }, [pathname]);

    // manage loading status
    useEffect(() => setLoading(false), []);

    return (
        <Fragment>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="author" content="GenKnot"/>
                <meta name="keywords" content="蒙特利尔国际教育中心, Montreal International Education Center, MIEC, 加拿大移民, 魁北克移民, 法语学习, 名校直通车, Montreal, 留学咨询"/>
                <meta name="description" content="我们是蒙特利尔国际教育中心-Montreal International Education Center(MIEC), 总部位于全球第一国际留学城市蒙特利尔，并在魁北克，多伦多，温哥华拥有9家各类国际教育机构"/>
                <title>MIEC - 蒙特利尔国际教育中心</title>
            </Head>

            <ThemeProvider>
                {/* <div className="page-loader" /> */}
                {loading ? <div className="page-loader"/> : <Component {...pageProps} />}
                <Analytics/>
            </ThemeProvider>
        </Fragment>
    );
}

export default appWithTranslation(MyApp);