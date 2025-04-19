import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

interface DropdownLink {
  title: string;
  href: string;
}

interface NavLink {
  title: string;
  href?: string;
  active?: boolean;
  dropdown?: DropdownLink[];
}

interface NavbarProps {
  brand?: string;
  navLinks: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({
  brand = "Feel Nigeria",
  navLinks,
}) => {
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
    <div
      className={`container-fluid p-0  ${isSticky ? "fixed-top shadow" : ""}`}
    >
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="m-0">
            <i className="fa fa-map-marker-alt me-3"></i>
            {brand}
          </h1>
        </Link>
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
            {navLinks.map((link) =>
              link.dropdown ? (
                <div className="nav-item dropdown" key={link.title}>
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    {link.title}
                  </a>
                  <div className="dropdown-menu m-0">
                    {link.dropdown.map((sublink) => (
                      <Link
                        to={sublink.href}
                        className="dropdown-item"
                        key={sublink.title}
                      >
                        {sublink.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.href ?? "#"}
                  className={`nav-item nav-link ${link.active ? "active" : ""}`}
                  key={link.title}
                >
                  {link.title}
                </Link>
              )
            )}
          </div>
          <Link
            to="/book"
            className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4"
          >
            Book Now
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
