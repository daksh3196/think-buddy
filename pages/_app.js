import "@/styles/globals.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{process.env.APP_NAME}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
