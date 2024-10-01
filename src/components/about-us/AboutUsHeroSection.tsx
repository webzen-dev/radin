import bg from "../../public/images/about.jpg";
const AboutUsHeroSection = () => {
  return (
    <div className="hero-section " style={{ background: `url(${bg.src})` }}>
      <h2>RET </h2>
      <span>
      RET offers advanced energy services across multiple industries
        globally.
      </span>
    </div>
  );
};

export default AboutUsHeroSection;
