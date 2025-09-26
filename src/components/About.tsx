import AboutUs from "./AboutUs";
import Header from "./Header";
import TravelGuide from "./TravelGuide";

const About = () => {
  return (
    <>
      <Header child="About Us" linkName="About Us" />
      <AboutUs standalone={true} />
      <TravelGuide />
    </>
  );
};

export default About;
