// src/pages/_app.tsx

import "../styles/globals.css";
import ProgressBar from "../components/ProgressBar";
import { ProjectProvider } from "../context/ProjectContext";
type AppProps = {
  Component: React.ElementType;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProjectProvider>
      <ProgressBar />
      <Component {...pageProps} />
    </ProjectProvider>
  );
}

export default MyApp;
