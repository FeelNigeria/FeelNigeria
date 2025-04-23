import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Topbar Component
const Topbar: React.FC = () => (
  <div className="container-fluid bg-primary px-5 d-none d-lg-block">
    <div className="row gx-0">
      <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
        <div
          className="d-inline-flex align-items-center"
          style={{ height: 45 }}
        >
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href="#"
          >
            <i className="fab fa-twitter fw-normal"></i>
          </a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href="#"
          >
            <i className="fab fa-facebook-f fw-normal"></i>
          </a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href="#"
          >
            <i className="fab fa-linkedin-in fw-normal"></i>
          </a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href="#"
          >
            <i className="fab fa-instagram fw-normal"></i>
          </a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
            href="#"
          >
            <i className="fab fa-youtube fw-normal"></i>
          </a>
        </div>
      </div>
      <div className="col-lg-4 text-center text-lg-end">
        <div
          className="d-inline-flex align-items-center"
          style={{ height: 45 }}
        >
          <a href="#">
            <small className="me-3 text-light">
              <i className="fa fa-user me-2"></i>Register
            </small>
          </a>
          <a href="#">
            <small className="me-3 text-light">
              <i className="fa fa-sign-in-alt me-2"></i>Login
            </small>
          </a>
          <div className="dropdown">
            <a
              href="#"
              className="dropdown-toggle text-light"
              data-bs-toggle="dropdown"
            >
              <small>
                <i className="fa fa-home me-2"></i> My Dashboard
              </small>
            </a>
            <ul className="dropdown-menu rounded">
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-user-alt me-2"></i>My Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-comment-alt me-2"></i>Inbox
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-bell me-2"></i>Notifications
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-cog me-2"></i>Account Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-power-off me-2"></i>Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Navbar & Hero Component
const NavbarHero: React.FC = () => (
  <div className="container-fluid position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <a href="#" className="navbar-brand p-0">
        <h1 className="m-0">
          <i className="fa fa-map-marker-alt me-3"></i>Feel Nigeria
        </h1>
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
          {["Home", "About", "Services", "Packages", "Blog"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-item nav-link"
            >
              {item}
            </a>
          ))}
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle active"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <ul className="dropdown-menu m-0">
              {[
                "Destination",
                "Explore Tour",
                "Travel Booking",
                "Our Gallery",
                "Travel Guides",
                "Testimonial",
                "404 Page",
              ].map((page) => (
                <li key={page}>
                  <a
                    href={`#${page.replace(/\s+/g, "").toLowerCase()}`}
                    className={`dropdown-item ${
                      page === "Travel Booking" ? "active" : ""
                    }`}
                  >
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a href="#contact" className="nav-item nav-link">
            Contact
          </a>
        </div>
        <a
          href="#book"
          className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4"
        >
          Book Now
        </a>
      </div>
    </nav>
  </div>
);

// Booking Form Component
const BookingForm: React.FC = () => (
  <div className="container-fluid booking py-5" id="book">
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <h5 className="section-booking-title pe-3">Booking</h5>
          <h1 className="text-white mb-4">Online Booking</h1>
          <p className="text-white mb-4">
            We secure your stay during travel, offering options based on budget,
            location, and amenities. Early booking can save money.
          </p>
          <p className="text-white mb-4">
            Intended travelers can reserve accommodation in advance through our
            online platforms or directly with the hotel. It ensures
            availability, often includes special deals, and provides
            convenience.
          </p>
          <a
            href="#readmore"
            className="btn btn-light text-primary rounded-pill py-3 px-5 mt-2"
          >
            Read More
          </a>
        </div>
        <div className="col-lg-6">
          <h1 className="text-white mb-3">Book A Tour Deals</h1>
          <p className="text-white mb-4">
            Get <span className="text-warning">A wonderful experience</span> On
            Your First Adventure Trip With Feel Nigeria. Get More Deal Offers
            Here.
          </p>
          <form>
            <div className="row g-3">
              {[
                {
                  id: "name",
                  type: "text",
                  label: "Your Name",
                  placeholder: "Your Name",
                },
                {
                  id: "email",
                  type: "email",
                  label: "Your Email",
                  placeholder: "Your Email",
                },
              ].map((field) => (
                <div key={field.id} className="col-md-6">
                  <div className="form-floating">
                    <input
                      type={field.type}
                      className="form-control bg-white border-0"
                      id={field.id}
                      placeholder={field.placeholder}
                    />
                    <label htmlFor={field.id}>{field.label}</label>
                  </div>
                </div>
              ))}
              {/* Date & selects... same pattern can be followed */}
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control bg-white border-0"
                    placeholder="Special Request"
                    id="message"
                    style={{ height: 100 }}
                  ></textarea>
                  <label htmlFor="message">Special Request</label>
                </div>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-primary text-white w-100 py-3"
                  type="submit"
                >
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

// Subscribe Component
const Subscribe: React.FC = () => (
  <div className="container-fluid subscribe py-5">
    <div className="container text-center py-5">
      <div className="mx-auto text-center" style={{ maxWidth: 900 }}>
        <h5 className="subscribe-title px-3">Subscribe</h5>
        <h1 className="text-white mb-4">Our Newsletter</h1>
        <p className="text-white mb-5">
          Experience Nigeria Like Never Before. We invite you to embark on an
          enriching journey with Feel Nigeria, where every destination tells a
          story, and every experience leaves a lasting impression.
        </p>
        <div className="position-relative mx-auto" style={{ maxWidth: 600 }}>
          <input
            className="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5"
            type="email"
            placeholder="Your email"
          />
          <button
            type="button"
            className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Footer Component
const Footer: React.FC = () => (
  <footer className="container-fluid footer py-5 bg-dark text-light">
    <div className="container py-5">
      <div className="row g-5">
        {/* Contact, Company, Support, Payments columns... */}
        <div className="col-md-6 col-lg-3">
          <h4 className="mb-4">Get In Touch</h4>
          <p>
            <i className="fas fa-home me-2"></i>20, Ajasa Street off King George
            IV, Onikan Lagos Nigeria
          </p>
          <p>
            <i className="fas fa-envelope me-2"></i>info@feelnigeria.com
          </p>
          <p>
            <i className="fas fa-phone me-2"></i>+234 803 475 1038
          </p>
        </div>
        {/* ...other columns similarly... */}
      </div>
    </div>
    <div className="container-fluid copyright text-center py-4">
      <div className="row g-4 align-items-center">
        <div className="col-md-6 text-md-end">
          © Feel Nigeria, All rights reserved.
        </div>
        <div className="col-md-6 text-md-start">
          Designed By{" "}
          <a href="https://feelnigeria.com" className="text-white">
            Feel Nigeria
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// Main Page
const BookingPage: React.FC = () => {
  useEffect(() => {
    const spinner = document.getElementById("spinner");
    if (spinner) spinner.classList.remove("show");
  }, []);

  return (
    <>
      {/* Spinner */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      <Topbar />
      <NavbarHero />
      <BookingForm />
      <Subscribe />
      <Footer />
    </>
  );
};

export default BookingPage;
