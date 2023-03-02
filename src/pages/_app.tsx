import { AppProps } from "next/app";
import Head from "next/head";

import "@/styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      {/* <DefaultSeo {...defaultSeoSettings} /> */}
      <main className="bg-primary flex items-center justify-center py-16 w-screen">
        <Component {...pageProps} />
      </main>
    </>
  );
}
