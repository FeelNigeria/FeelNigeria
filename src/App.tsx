import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import TopBar from "./components/TopBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import BackToTop from "./components/BackToTop";
import About from "./components/About";
import Home from "./components/Home";
import Subscribe from "./components/Subscribe";
import Blog from "./components/Blog";
import Package from "./components/Package";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import RegistrationForm from "./components/RegistrationForm";

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
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isMobileView && <TopBar />}
      <Navbar
        onSelectNavLink={(title) => setSelectedNavLink(title)}
        selectedNavLink={selectedNavLink}
        navLinks={navLinks}
        isMobileView={isMobileView}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services standAlone={true} />} />
        <Route path="/packages" element={<Package standAlone={true} />} />
        <Route path="/blog" element={<Blog standAlone={true} />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/registration" element={<RegistrationForm />} />
      </Routes>
      <Subscribe />
      <Footer />
      <Copyright />
      {showBackToTop && <BackToTop />}
    </>
  );
};

export default App;
