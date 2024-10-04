import React, { useState, useEffect, Suspense, useTransition } from "react";
import Loading from "../components/loading";

const Header = React.lazy(() => import("../components/Header"));
const InstallPWAButton = React.lazy(() => import("../components/InstallButton"));
const HeroSection = React.lazy(() => import("../components/home/HeroSection"));
const AboutTheCompany = React.lazy(() => import("../components/home/AboutTheCompany"));
const CompanyStats = React.lazy(() => import("../components/home/CompanyStats"));
const ProjectsIndex = React.lazy(() => import("../components/home/ProjectsIndex"));
const IndustryPride = React.lazy(() => import("../components/home/IndustryPride"));
const ServiceIndex = React.lazy(() => import("../components/home/ServiceIndex"));
const ProjectAndServices = React.lazy(() => import("../components/home/ProjectAndServices"));
const ContactUsIndex = React.lazy(() => import("../components/home/ContactUsIndex"));
const Footer = React.lazy(() => import("../components/Footer"));

export default function Home() {
  const [isPending, startTransition] = useTransition();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setIsHydrated(true);
    });
  }, []);

  if (!isHydrated || isPending) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Header />
        <InstallPWAButton />
        <HeroSection />
        <AboutTheCompany />
        <CompanyStats />
        <ProjectsIndex />
        <IndustryPride />
        <ServiceIndex />
        <ProjectAndServices />
        <ContactUsIndex />
        <Footer />
      </div>
    </Suspense>
  );
}
