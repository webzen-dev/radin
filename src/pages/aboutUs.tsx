import React, { useEffect, useState, Suspense } from "react";
import Loader from "../components/loading";

const Header = React.lazy(() => import("../components/Header"));
const Footer = React.lazy(() => import("../components/Footer"));
const AboutUsHeroSection = React.lazy(() => import("../components/about-us/AboutUsHeroSection"));
const AboutServices = React.lazy(() => import("../components/about-us/AboutServices"));
const AboutUsSectoin = React.lazy(() => import("../components/about-us/AboutusSection"));
const Mission = React.lazy(() => import("../components/about-us/Mission"));
const Vision = React.lazy(() => import("../components/about-us/Vision"));
const CoreValues = React.lazy(() => import("../components/about-us/CoreValues"));
const CompanyCollaborations = React.lazy(() => import("../components/about-us/CompanyCollaborations"));

const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <div className="aboutUs">
        <Header />
        <AboutUsHeroSection />
        <AboutServices />
        <AboutUsSectoin />
        <Mission />
        <Vision />
        <CoreValues />
        <CompanyCollaborations />
        <Footer />
      </div>
    </Suspense>
  );
};

export default AboutUs;
