import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';

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
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                    crossOrigin=""
                />
            </Head>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    black: 'white',
                    white: '#495e88',
                }}
            >
                <Component {...pageProps} />
            </MantineProvider>
        </>
    );
}

export default MyApp;
