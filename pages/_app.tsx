import { MantineProvider } from '@mantine/core';
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
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <title>Map App</title>
            </Head>
            <MantineProvider withGlobalStyles withNormalizeCSS>
                <Component {...pageProps} />
            </MantineProvider>
        </>
    );
}

export default MyApp;
