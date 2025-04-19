import React from "react";

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
    <div className="carousel-header">
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
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
              <img src={slide.image} className="img-fluid" alt={slide.alt} />
              <div className="carousel-caption">
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
                      className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
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
            className="carousel-control-prev-icon btn bg-primary"
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
            className="carousel-control-next-icon btn bg-primary"
            aria-hidden="false"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
