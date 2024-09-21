import AboutTheCompany from "@/components/home/AboutTheCompany";
import CompanyStats from "@/components/home/CompanyStats";
import ProjectsIndex from "@/components/home/ProjectsIndex";
import IndustryPride from "@/components/home/IndustryPride";
import ServiceIndex from "@/components/home/ServiceIndex";
import ProjectAndServices from "@/components/home/ProjectAndServices";
import ContactUsIndex from "@/components/home/ContactUsIndex";
import Footer from "@/components/Footer";
import Header from "../components/Header";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <AboutTheCompany />
      <CompanyStats />
      <ProjectsIndex />
      <IndustryPride />
      <ServiceIndex />
      <ProjectAndServices />
      <ContactUsIndex />
      <Footer />
    </div>
  );
}
