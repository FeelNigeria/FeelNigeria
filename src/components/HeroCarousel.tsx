import { Image } from "@chakra-ui/react";
import React from "react";
import Navbar, { NavLink } from "./NavBar";

interface Slide {
  image: string;
  alt: string;
  subheading: string;
  heading: string;
  text: string;
  buttonText: string;
}

interface HeroCarouselProps {
  slides: Slide[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
  return (
    <>
      <div className="carousel-header">
        <div
          id="carouselId"
          className="carousel slide"
          data-bs-ride="carousel"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            {slides.map((_, idx) => (
              <li
                key={idx}
                data-bs-target="#carouselId"
                data-bs-slide-to={idx}
                className={idx === 0 ? "active" : ""}
              ></li>
            ))}
          </ol>
          <div className="carousel-inner" role="listbox">
            {slides.map((slide, idx) => (
              <div
                className={`carousel-item ${idx === 0 ? "active" : ""}`}
                key={idx}
              >
                <Image
                  src={slide.image}
                  className="img-fluid"
                  alt={slide.alt}
                  height={"100vh"}
                  width={"100%"}
                  objectFit="cover"
                  fit={"cover"}
                  objectPosition="center"
                  filter="brightness(50%)"
                  loading="lazy"
                  zIndex={0}
                />
                <div className="carousel-caption centered-caption">
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h4
                      className="text-white text-uppercase fw-bold mb-4"
                      style={{ letterSpacing: "3px" }}
                    >
                      {slide.subheading}
                    </h4>
                    <h1 className="display-2 text-capitalize text-white mb-4">
                      {slide.heading}
                    </h1>
                    <p className="mb-5 fs-5">{slide.text}</p>
                    <div className="d-flex align-items-center justify-content-center">
                      <a
                        className="btn-hover-bg btn btn-success rounded-pill text-white py-3 px-5"
                        href="#"
                      >
                        {slide.buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon btn bg-success"
              aria-hidden="false"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon btn bg-success"
              aria-hidden="false"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div
        className="container-fluid search-bar position-relative"
        style={{ top: "-50%", transform: "translateY(-50%)" }}
      >
        <div className="container">
          <div
            className="position-relative rounded-pill w-100 mx-auto p-5 bg-success"
            // style={{ background: "rgba(19, 53, 123, 0.8)" }}
          >
            <input
              className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Eg: Thailand"
            ></input>
            <button
              type="button"
              className="btn btn-success rounded-pill py-2 px-4 position-absolute me-2"
              style={{
                top: "50%",
                right: "46px",
                transform: "translateY(-50%)",
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCarousel;
