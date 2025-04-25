import { HStack, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.PNG";

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
  isMobileView?: boolean;
}

const Navbar: React.FC<Props> = ({
  navLinks,
  onSelectNavLink,
  selectedNavLink,
  brand = "Feel Nigeria",
  isMobileView = false,
}: Props) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

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
      className={`container-fluid p-0 ${
        isSticky ? "fixed-top shadow" : isMobileView ? "" : "position-relative"
      }`}
    >
      <nav
        className={`navbar navbar-expand-lg navbar-light ${isMobileView? "px-2": "px-4"} px-lg-5 py-4 py-lg-1 ${
          isSticky ? "bg-light" : ""
        }`}
      >
        <Link
          to="/"
          className={`navbar-brand p-0 ${
            isSticky ? "text-success" : "text-white"
          }`}
        >
          <HStack>
            <Image
              src={logo}
              boxSize={isMobileView ? "50Px" : "60px"}
              borderRadius={10}
            />
            <h1 className="m-0">{brand}</h1>
          </HStack>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          <span className="fa fa-bars"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
          id="navbarCollapse"
        >
          <div className={`navbar-nav ms-auto py-0`}>
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  className={`nav-item dropdown ${
                    isSticky ? "text-white" : "text-success"
                  }`}
                  key={link.title}
                >
                  <a
                    href="#"
                    className={`nav-link dropdown-toggle ${
                      isSticky ? "" : "text-white"
                    }`}
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
                  className={`nav-item nav-link ${
                    isSticky ? "" : "text-white"
                  } ${
                    link.title == selectedNavLink ? "bg-success text-white" : ""
                  }`}
                  key={link.title}
                  onClick={() => {
                    onSelectNavLink(link.title);
                    setIsCollapsed(!isCollapsed);
                  }}
                >
                  {link.title}
                </Link>
              )
            )}
          </div>
          <Link
            to={"/booking"}
            className="btn btn-success rounded-pill py-2 px-4 ms-lg-4"
          >
            Book Now
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
