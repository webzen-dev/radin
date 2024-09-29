import AboutServices from "../components/about-us/AboutServices";
import AboutUsHeroSection from "../components/about-us/AboutUsHeroSection";
import AboutUsSectoin from "../components/about-us/AboutusSection";
import CompanyCollaborations from "../components/about-us/CompanyCollaborations";
import CoreValues from "../components/about-us/CoreValues";
import Mission from "../components/about-us/Mission";
import Vision from "../components/about-us/Vision";
import Footer from "../components/Footer";
import Header from "../components/Header";

const aboutUs = () => {
  return (
    <div className="aboutUs">
      <Header />
      <AboutUsHeroSection />
      <AboutServices />{" "}
      <AboutUsSectoin/>
      <Mission/>
      <Vision/> 
      <CoreValues/> 
      <CompanyCollaborations/>
      <Footer/>
    </div>
  );
};

export default aboutUs;
