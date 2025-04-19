import React from 'react';
import Navbar from './components/NavBar';
import HeroCarousel from './components/HeroCarousel';
import TopBar from './components/TopBar';

const navLinks = [
  { title: "Home", href: "/", active: true },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Packages", href: "/packages" },
  { title: "Blog", href: "/blog" },
  {
    title: "Pages",
    dropdown: [
      { title: "Destination", href: "/destination" },
      { title: "Explore Tour", href: "/tour" },
      { title: "Travel Booking", href: "/booking" },
      { title: "Our Gallery", href: "/gallery" },
      { title: "Travel Guides", href: "/guides" },
      { title: "Testimonial", href: "/testimonial" },
      { title: "404 Page", href: "/404" },
    ]
  },
  { title: "Contact", href: "/contact" }
];

const heroSlides = [
  {
    image: "img/carousel-2.jpg",
    alt: "Slide 1",
    subheading: "Feel Nigeria",
    heading: "Let's tour The World Together!",
    text: "Lets' show you the beautiful terrain of Nigeria",
    buttonText: "Discover Now"
  },
  {
    image: "img/carousel-1.jpg",
    alt: "Slide 2",
    subheading: "Feel Nigeria",
    heading: "Find Your Perfect Tour At Travel",
    text: "We make you feel @ home while enjoying your holiday in Nigeria",
    buttonText: "Discover Now"
  },
  {
    image: "img/carousel-3.jpg",
    alt: "Slide 3",
    subheading: "Feel Nigeria",
    heading: "You Like To Go?",
    text: "Let's wow you while showing you the beautiful landscapes of Nigeria",
    buttonText: "Discover Now"
  }
];

const App: React.FC = () => {
  return (
    <>
      <TopBar />
      <Navbar navLinks={navLinks} />
      <HeroCarousel slides={heroSlides} />
    </>
  );
};

export default App;
