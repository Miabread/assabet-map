import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/style.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="manifest" href="/manifest.webmanifest" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Component {...pageProps} />{' '}
        </>
    );
}

export default MyApp;
