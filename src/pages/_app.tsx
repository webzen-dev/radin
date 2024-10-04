// src/pages/_app.tsx

import "../styles/globals.css";
import ProgressBar from "../components/ProgressBar";
import { ProjectProvider } from "../context/ProjectContext";
import { AnimationProvider } from "../context/AnimationContext";
type AppProps = {
  Component: React.ElementType;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProjectProvider>
      <AnimationProvider>
      <ProgressBar />
      <Component {...pageProps} />
      </AnimationProvider>
    </ProjectProvider>
  );
}

export default MyApp;
