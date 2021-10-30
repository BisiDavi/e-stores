import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />{" "}
        </>
    );
}

export default MyApp;
