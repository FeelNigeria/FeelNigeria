import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import testimonialImg1 from "../assets/img/testimonial-1.jpg";
import testimonialImg2 from "../assets/img/testimonial-2.jpg";
import testimonialImg3 from "../assets/img/testimonial-3.jpg";
import testimonialImg4 from "../assets/img/testimonial-4.jpg";

const Testimonials = () => {
  const options = {
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    nav: false,
    // dots: true,
  };

  return (
    <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
          <h5 className="section-title px-3">Testimonial</h5>
          <h1 className="mb-0">Our Clients Say!!!</h1>
        </div>
        <div className="testimonial-carousel">
          <OwlCarousel
            className="owl-theme section"
            loop
            margin={25}
            items={3}
            autoplay
            {...options}
          >
            <div className="testimonial-item text-center rounded pb-4 review item">
              <div className="testimonial-comment bg-light rounded p-4">
                <p className="text-center mb-5">
                  Feel Nigeria turned our trip into an unforgettable adventure!
                  From the seamless booking process to the well-planned tour
                  packages, every detail was thoughtfully handled. The cultural
                  experiences, especially the cooking classNamees and
                  traditional dance performances, made us feel truly connected
                  to Nigeria. Highly recommended!,
                </p>
              </div>
              <div className="testimonial-img p-1">
                <img
                  src={testimonialImg1}
                  className="img-fluid rounded-circle"
                  alt="Image"
                ></img>
              </div>
              <div style={{ marginTop: "-35px" }}>
                <h5 className="mb-0">Emily Patterson</h5>
                <p className="mb-0">New York, USA</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center rounded pb-4 review item">
              <div className="testimonial-comment bg-light rounded p-4">
                <p className="text-center mb-5">
                  I never thought Nigeria could be so mesmerizing! Feel Nigeria
                  curated a personalized tour for us, and the travel guides took
                  us beyond the typical tourist attractions. The hidden gems,
                  cultural insights, and warm hospitality made this the most
                  enriching journey of my life. Can’t wait to visit again!,
                </p>
              </div>
              <div className="testimonial-img p-1">
                <img
                  src={testimonialImg2}
                  className="img-fluid rounded-circle"
                  alt="Image"
                ></img>
              </div>
              <div style={{ marginTop: "-35px" }}>
                <h5 className="mb-0">Sophie Müller</h5>
                <p className="mb-0">Germany</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center rounded pb-4 review item">
              <div className="testimonial-comment bg-light rounded p-4">
                <p className="text-center mb-5">
                  As an adventure traveler, I was blown away by the experiences
                  Feel Nigeria arranged for me. From hiking in breathtaking
                  landscapes to thrilling water sports, everything was
                  well-organized. Their expertise in destination management
                  ensured a smooth and hassle-free trip. Absolutely fantastic!,
                </p>
              </div>
              <div className="testimonial-img p-1">
                <img
                  src={testimonialImg3}
                  className="img-fluid rounded-circle"
                  alt="Image"
                ></img>
              </div>
              <div style={{ marginTop: "-35px" }}>
                <h5 className="mb-0">Janet Carter</h5>
                <p className="mb-0">United Kingdom</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center rounded pb-4 review item">
              <div className="testimonial-comment bg-light rounded p-4">
                <p className="text-center mb-5">
                  We booked our wedding through Feel Nigeria, and it was the
                  best decision we ever made! Their event planning team took
                  care of every detail—venue, logistics, cultural
                  performances—creating a magical celebration. The level of
                  professionalism and hospitality exceeded our expectations.
                  Merci, Feel Nigeria!,
                </p>
              </div>
              <div className="testimonial-img p-1">
                <img
                  src={testimonialImg4}
                  className="img-fluid rounded-circle"
                  alt="Image"
                ></img>
              </div>
              <div style={{ marginTop: "-35px" }}>
                <h5 className="mb-0">Camille Laurent</h5>
                <p className="mb-0">France</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
