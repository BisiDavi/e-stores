import { persistStore } from "redux-persist";
import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import type { AppProps } from "next/app";

import store from "@/redux/store";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    const persistor = persistStore(store);

    return (
        <>
            <Head>
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                    rel="stylesheet"
                />
            </Head>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Component {...pageProps} />{" "}
                </PersistGate>
            </Provider>
        </>
    );
}

export default MyApp;
