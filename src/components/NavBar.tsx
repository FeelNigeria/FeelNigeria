import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

interface DropdownLink {
  title: string;
  href: string;
}

export interface NavLink {
  title: string;
  href?: string;
  active?: boolean;
  dropdown?: DropdownLink[];
}

interface Props {
  brand?: string;
  navLinks: NavLink[];
  selectedNavLink: string;
  onSelectNavLink: (title: string) => void;
}

const Navbar: React.FC<Props> = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 40); // TopBar height is 40px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={
        "navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0" +
        (isSticky ? " position-fixed" : "")
      }
    >
      <a href="" className="navbar-brand p-0">
        <h1 className="m-0">
          <i className="fa fa-map-marker-alt me-3"></i>Feel Nigeria
        </h1>
        {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <a href="index.html" className="nav-item nav-link active">
            Home
          </a>
          <a href="about.html" className="nav-item nav-link">
            About
          </a>
          <a href="services.html" className="nav-item nav-link">
            Services
          </a>
          <a href="packages.html" className="nav-item nav-link">
            Packages
          </a>
          <a href="blog.html" className="nav-item nav-link">
            Blog
          </a>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu m-0">
              <a href="destination.html" className="dropdown-item">
                Destination
              </a>
              <a href="tour.html" className="dropdown-item">
                Explore Tour
              </a>
              <a href="booking.html" className="dropdown-item">
                Travel Booking
              </a>
              <a href="gallery.html" className="dropdown-item">
                Our Gallery
              </a>
              <a href="guides.html" className="dropdown-item">
                Travel Guides
              </a>
              <a href="testimonial.html" className="dropdown-item">
                Testimonial
              </a>
              <a href="404.html" className="dropdown-item">
                404 Page
              </a>
            </div>
          </div>
          <a href="contact.html" className="nav-item nav-link">
            Contact
          </a>
        </div>
        <a href="" className="btn btn-success rounded-pill py-2 px-4 ms-lg-4">
          Book Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
