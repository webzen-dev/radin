// src/pages/_app.tsx

import "@/styles/globals.css";
import ProgressBar from "@/components/ProgressBar";
type AppProps = {
  Component: React.ElementType;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProgressBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
