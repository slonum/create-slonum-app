import React from 'react';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ErrorBoundary } from '@ui/blocks/ErrorBoundary';
import { ModalConnector } from '@ui/blocks/modal';
import { NotificationConnector } from '@ui/blocks/notification';
import { Layout } from 'lib/app/Layout';
import store, { persistor } from 'lib/app/store';
import 'lib/shared/styles/_base.scss';
import '../../public/fonts/fonts.scss';

const GoogleAnalytics = dynamic(
  () => import('@ui/blocks/analytics').then((p) => p.GoogleAnalytics),
  {
    ssr: false,
  },
);
const VkPixel = dynamic(
  () => import('@ui/blocks/analytics').then((p) => p.VkPixel),
  {
    ssr: false,
  },
);
const YandexMetrika = dynamic(
  () => import('@ui/blocks/analytics').then((p) => p.YandexMetrika),
  {
    ssr: false,
  },
);

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Калькулятор дробей - СлонУм</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff672e" />
        {/* <meta name="yandex-verification" content="903b44c4ea8a8bf2" /> */}
        {/* <meta
          name="google-site-verification"
          content="8FFjDX_VqoNKqj8IulUlB30RKwKUHzpJt82Z_26sjjc"
        /> */}
        <meta name="description" content="" />
        <meta name="msapplication-TileColor" content="#00a300" />
        <meta name="theme-color" content="#ffffff" />
        {/* <meta
          name="zen-verification"
          content="K4T4oFZLBl38IkqpDgYrDmTKPcAT1jEUFpLhp0cQpRgmd3h88Y5HVoEgGEHMWQlz"
        /> */}
        {/* <VkPixel /> */}
        {process.env.NEXT_PUBLIC_NODE === 'development' && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>

      {process.env.NEXT_PUBLIC_NODE !== 'development' && (
        <>
          <GoogleAnalytics />
          {/* <YandexMetrika id={90262841} /> */}
        </>
      )}

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ErrorBoundary>
            <div className="root" id="root">
              <Layout>
                <Component {...pageProps} />
              </Layout>
              <div id="notification" />
              <div id="modal" />
            </div>
            <ModalConnector />
            <NotificationConnector />
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </>
  );
}

export default CustomApp;
