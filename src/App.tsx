import React, { useState } from "react";
import Navbar from "./components/NavBar";
import HeroCarousel from "./components/HeroCarousel";
import TopBar from "./components/TopBar";
import { Routes, Route } from "react-router-dom";
import BookingPage from "./components/Booking";
import AboutUs from "./components/AboutUs";
import ServicesSection from "./components/ServiceSection";
import Destination from "./components/Destination";
import Subscribe from "./components/Subscribe";
import Explore from "./components/Explore";
import Package from "./components/Package";
import Gallery from "./components/Gallery";
import TourBooking from "./components/TourBooking";
import TravelGuide from "./components/TravelGuide";
import Blog from "./components/Blog";

const navLinks = [
  { title: "Home", href: "/" },
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
    ],
  },
  { title: "Contact", href: "/contact" },
];

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

const App: React.FC = () => {
  const [selectedNavLink, setSelectedNavLink] = useState("Home");
  return (
    <>
      <TopBar />
      <Navbar
        onSelectNavLink={(title) => setSelectedNavLink(title)}
        selectedNavLink={selectedNavLink}
        navLinks={navLinks}
      />
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
      <Routes>
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </>
  );
};

export default App;
