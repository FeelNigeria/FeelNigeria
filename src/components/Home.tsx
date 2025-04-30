import AboutUs from "./AboutUs";
import Blog from "./Blog";
import Destination from "./Destination";
import Explore from "./Explore";
import Gallery from "./Gallery";
import HeroCarousel from "./HeroCarousel";
import Package from "./Package";
import ServicesSection from "./Services";
import Subscribe from "./Subscribe";
import TourBooking from "./TourBooking";
import TravelGuide from "./TravelGuide";
import slideOneImage from "../assets/img/carousel-1.jpg";
import slideTwoImage from "../assets/img/carousel-2.jpg";
import slideThreeImage from "../assets/img/carousel-3.jpg";

const heroSlides = [
  {
    image: slideOneImage,
    alt: "Slide 1",
    subheading: "Feel Nigeria",
    heading: "Let's tour Nigeria Together!",
    text: "Lets' show you the beautiful terrain of Nigeria",
    buttonText: "Discover Now",
  },
  {
    image: slideTwoImage,
    alt: "Slide 2",
    subheading: "Feel Nigeria",
    heading: "Find Your Perfect Travel Guide",
    text: "We make you feel @ home while enjoying your holiday in Nigeria",
    buttonText: "Discover Now",
  },
  {
    image: slideThreeImage,
    alt: "Slide 3",
    subheading: "Feel Nigeria",
    heading: "You Like To Go?",
    text: "Let's wow you while showing you the beautiful landscapes of Nigeria",
    buttonText: "Discover Now",
  },
];

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <AboutUs />
      <ServicesSection />
      <Destination />
      {/* <Subscribe /> */}
      {/* <Explore /> */}
      {/* <Package /> */}
      {/* <Gallery /> */}
      <TourBooking />
      <TravelGuide />
      {/* <Blog /> */}
      {/* <Testimonials /> */}
    </>
  );
};

export default Home;
