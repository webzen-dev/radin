// src/pages/_app.tsx

import "../styles/globals.css";
import ProgressBar from "../components/ProgressBar";
import { ProjectProvider } from "../context/ProjectContext";
import InstallButton from "../components/InstallButton";
type AppProps = {
  Component: React.ElementType;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProjectProvider>
      <ProgressBar />
      <Component {...pageProps} />
      <InstallButton/>
    </ProjectProvider>
  );
}

export default MyApp;
