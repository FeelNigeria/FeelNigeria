import AboutUs from "./AboutUs";
import Blog from "./Blog";
import Destination from "./Destination";
import Explore from "./Explore";
import Gallery from "./Gallery";
import HeroCarousel from "./HeroCarousel";
import Package from "./Package";
import ServicesSection from "./Services";
import Subscribe from "./Subscribe";
import Testimonials from "./Testimonials";
import TourBooking from "./TourBooking";
import TravelGuide from "./TravelGuide";

const heroSlides = [
  {
    image: "img/carousel-2.jpg",
    alt: "Slide 1",
    subheading: "Feel Nigeria",
    heading: "Let's tour Nigeria Together!",
    text: "Lets' show you the beautiful terrain of Nigeria",
    buttonText: "Discover Now",
  },
  {
    image: "img/carousel-1.jpg",
    alt: "Slide 2",
    subheading: "Feel Nigeria",
    heading: "Find Your Perfect Tour At Travel",
    text: "We make you feel @ home while enjoying your holiday in Nigeria",
    buttonText: "Discover Now",
  },
  {
    image: "img/carousel-3.jpg",
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
      <HeroCarousel slides={heroSlides} />
      <AboutUs />
      <ServicesSection />
      <Destination />
      <Subscribe />
      <Explore />
      <Package />
      <Gallery />
      <TourBooking />
      <TravelGuide />
      <Blog />
      <Testimonials />
    </>
  );
};

export default Home;
