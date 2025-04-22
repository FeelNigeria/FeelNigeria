import React, { useState, useEffect } from "react";
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
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import BackToTop from "./components/BackToTop";
import About from "./components/About";
import Home from "./components/Home";

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

const App: React.FC = () => {
  const [selectedNavLink, setSelectedNavLink] = useState("Home");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopBar />
      <Navbar
        onSelectNavLink={(title) => setSelectedNavLink(title)}
        selectedNavLink={selectedNavLink}
        navLinks={navLinks}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route
          path="/about"
          element={
            <About
              onSelectNavLink={(title) => setSelectedNavLink(title)}
              selectedNavLink={selectedNavLink}
              navLinks={navLinks}
            />
          }
        />
      </Routes>
      <Footer />
      <Copyright />
      {showBackToTop && <BackToTop />}
    </>
  );
};

export default App;
