// src/pages/_app.tsx

import "../styles/globals.css"
import ProgressBar from "@/components/ProgressBar";
import { AuthProvider } from "@/context/AuthContext";
type AppProps = {
  Component: React.ElementType;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ProgressBar />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
