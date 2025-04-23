import React from "react";
import aboutImg from "../assets/img/about-img.jpg";
import aboutImg1 from "../assets/img/about-img-1.png";

const AboutUs: React.FC = () => {
  return (
    <div className="container-fluid about py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <div
              className="h-100"
              style={{
                border: "50px solid",
                borderColor: "transparent  #198754 transparent  #198754",
              }}
            >
              <img
                src={aboutImg}
                className="img-fluid w-100 h-100"
                alt="About"
              />
            </div>
          </div>
          <div
            className="col-lg-7"
            style={{
              background: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${aboutImg1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h5 className="section-about-title pe-3 text-success">About Us</h5>
            <h1 className="mb-4">
              Welcome to <span className="text-success">Feel Nigeria</span>
            </h1>
            <p className="mb-4">Dear Esteemed Visitor,</p>
            <p className="mb-4">
              At Feel Nigeria, we are committed to providing an exceptional
              travel experience that highlights the rich cultural heritage,
              breathtaking landscapes, and vibrant cities of Nigeria. As a
              premier destination for tourism and travel, we take pride in
              showcasing the country's remarkable beauty, historical
              significance, and diverse attractions to both local and
              international visitors.
            </p>
            <p className="mb-4">
              <strong>Who We Are</strong> Feel Nigeria is driven by a team of
              passionate and experienced travel enthusiasts who share a deep
              love for Nigeria’s unique offerings. With extensive expertise in
              the tourism industry, we are dedicated to curating unforgettable
              travel experiences that immerse visitors in the rich traditions,
              warm hospitality, and dynamic culture of Nigeria. Our team
              comprises travel professionals, local guides, and cultural experts
              who work collaboratively to ensure every journey is seamless,
              educational, and inspiring.
            </p>
            <p className="mb-4">
              <strong>Our Mission</strong> Our mission is to redefine travel and
              tourism in Nigeria by offering well-structured, informative, and
              immersive experiences that cater to a wide range of travelers.
              Whether you are a history enthusiast, nature lover, adventure
              seeker, or business traveler, our tailored services ensure that
              you experience Nigeria in the most authentic and fulfilling way.
              We aim to promote Nigeria as a top travel destination by bridging
              the gap between exploration and cultural appreciation.
            </p>

            <p className="mb-4">Warm regards,</p>
            <p className="mb-4">The Feel Nigeria Team</p>

            <p className="mb-4">
              <strong>Why Choose Us?</strong> At Feel Nigeria, we prioritize
              excellence, customer satisfaction, and authenticity in all our
              services. Here’s why travelers trust us:
            </p>

            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  <strong>Expert Knowledge</strong> – Our team possesses
                  in-depth knowledge of Nigeria’s diverse regions, ensuring
                  accurate and insightful travel guidance.
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  <strong>Personalized Experiences</strong> – We understand that
                  every traveler is unique, and we go the extra mile to
                  customize each journey to meet individual preferences.
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  <strong>Safety & Comfort</strong> – We prioritize the safety
                  and well-being of our travelers by partnering with reputable
                  service providers and ensuring high-quality travel
                  arrangements.
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  <strong>Commitment to Sustainability</strong> – We advocate
                  for responsible tourism practices that support local
                  communities and preserve Nigeria’s natural and cultural
                  heritage.
                </p>
              </div>
            </div>

            <a className="btn btn-success rounded-pill py-3 px-5 mt-2" href="#">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
