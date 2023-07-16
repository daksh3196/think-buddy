import AppLayout from "@/components/PageLayout";
import { AuthUserProvider } from "@/firebase/auth";
import "@/styles/globals.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{process.env.APP_NAME}</title>
      </Head>
      <AuthUserProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </AuthUserProvider>
    </>
  );
}
