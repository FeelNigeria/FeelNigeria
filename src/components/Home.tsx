import HeroCarousel from "./HeroCarousel";
import TourBooking from "./TourBooking";
import TravelGuide from "./TravelGuide";
import CarouselFade from "./Destination/CarouselFade";
import TourismSection from "./TourismSection";

// const heroSlides = [
//   {
//     image: slideOneImage,
//     alt: "Slide 1",
//     subheading: "Feel Nigeria",
//     heading: "Let's tour Nigeria Together!",
//     text: "Lets' show you the beautiful terrain of Nigeria",
//     buttonText: "Discover Now",
//   },
//   {
//     image: slideTwoImage,
//     alt: "Slide 2",
//     subheading: "Feel Nigeria",
//     heading: "Find Your Perfect Travel Guide",
//     text: "We make you feel @ home while enjoying your holiday in Nigeria",
//     buttonText: "Discover Now",
//   },
//   {
//     image: slideThreeImage,
//     alt: "Slide 3",
//     subheading: "Feel Nigeria",
//     heading: "You Like To Go?",
//     text: "Let's wow you while showing you the beautiful landscapes of Nigeria",
//     buttonText: "Discover Now",
//   },
// ];

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <TourismSection />
      <CarouselFade />
      <TourBooking />
      <TravelGuide />
    </>
  );
};

export default Home;
