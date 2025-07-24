import React from "react";
import Navbar from "./NavBar";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Packages", href: "/packages" },
  {
    title: "Pages",
    dropdown: [
      { title: "Destination", href: "/destination" },
      { title: "Explore Tour", href: "/tour" },
      { title: "Travel Booking", href: "/booking" },
      { title: "Our Gallery", href: "/gallery" },
      { title: "Travel Guides", href: "/guides" },
      { title: "Testimonial", href: "/testimonial" },
    ],
  },
  { title: "Contact", href: "/contact" },
];

const FixedNavbar = () => (
  <Navbar
    navLinks={navLinks}
    selectedNavLink={"Home"}
    onSelectNavLink={() => {}}
    isMobileView={false}
  />
);

export default FixedNavbar;
