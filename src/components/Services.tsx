import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

interface Props {
  standAlone?: boolean;
}

const ServicesSection: React.FC<Props> = ({ standAlone }) => {
  return (
    <>
      {standAlone && <Header />}
      <div className="container-fluid bg-light service py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "900px" }}
          >
            <h5 className="section-title px-3 text-success">Services</h5>
            <h1 className="mb-0">Our Services</h1>
          </div>
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "900px" }}
          >
            <p className="mb-4">
              At Feel Nigeria, we are dedicated to providing exceptional travel
              services tailored to ensure your journey through Nigeria is
              seamless, enriching, and unforgettable. Our comprehensive range of
              services is designed to cater to diverse interests, preferences,
              and budgets, allowing you to explore the beauty and vibrancy of
              Nigeria with ease and confidence, while ensuring that every aspect
              of your journey in Nigeria is seamless, enriching, and memorable.
              Below is an overview of the services we offer:
            </p>
          </div>
          <div className="row g-4">
            {standAlone && (
              <>
                <div className="col-lg-6">
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="service-content-inner d-flex align-items-center bg-white border border-success rounded p-4 pe-0">
                        <div className="service-content text-end">
                          <h5 className="mb-4">Tour Packages</h5>
                          <p className="mb-0">
                            We specialize in crafting customized tour packages
                            that align with your unique interests, budget, and
                            travel style. Whether you seek cultural immersion,
                            historical exploration, or thrilling adventures, our
                            thoughtfully designed itineraries ensure an
                            unforgettable experience..
                          </p>
                        </div>
                        <div className="service-icon p-4">
                          <i className="fa fa-globe fa-4x text-success"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="service-content-inner d-flex align-items-center  bg-white border border-success rounded p-4 pe-0">
                        <div className="service-content text-end">
                          <h5 className="mb-4">Travel Booking</h5>
                          <p className="mb-0">
                            Our secure and user-friendly online platform
                            simplifies the process of booking flights, hotels,
                            and car rentals. With just a few clicks, you can
                            arrange all your travel essentials, ensuring a
                            hassle-free journey from start to finish.
                          </p>
                        </div>
                        <div className="service-icon p-4">
                          <i className="fa fa-hotel fa-4x text-success"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="service-content-inner d-flex align-items-center bg-white border border-success rounded p-4 pe-0">
                        <div className="service-content text-end">
                          <h5 className="mb-4">Travel Guides</h5>
                          <p className="mb-0">
                            Our team of experienced and knowledgeable travel
                            guides is passionate about showcasing Nigeria’s
                            hidden gems. They will accompany you on your
                            journey, offering valuable insights, historical
                            context, and local anecdotes to enrich your travel
                            experience.
                          </p>
                        </div>
                        <div className="service-icon p-4">
                          <i className="fa fa-user fa-4x text-success"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="service-content-inner d-flex align-items-center bg-white border border-success rounded p-4 pe-0">
                        <div className="service-content text-end">
                          <h5 className="mb-4">Destination Management</h5>
                          <p className="mb-0">
                            We provide end-to-end destination management
                            services, including logistics, transportation, and
                            accommodation arrangements. Our meticulous planning
                            ensures that every aspect of your trip is seamlessly
                            coordinated, allowing you to focus on enjoying your
                            adventure.
                          </p>
                        </div>
                        <div className="service-icon p-4">
                          <i className="fa fa-cog fa-4x text-success"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="service-content-inner d-flex align-items-center bg-white border border-success rounded p-4 ps-0">
                        <div className="service-icon p-4">
                          <i className="fa fa-globe fa-4x text-success"></i>
                        </div>
                        <div className="service-content">
                          <h5 className="mb-4">Event Planning</h5>
                          <p className="mb-0">
                            From weddings and conferences to festivals and
                            corporate retreats, our event planning services are
                            designed to bring your vision to life. We handle
                            every detail, from venue selection to execution,
                            ensuring a memorable and stress-free event.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="service-content-inner d-flex align-items-center bg-white border border-success rounded p-4 ps-0">
                        <div className="service-icon p-4">
                          <i className="fa fa-hotel fa-4x text-success"></i>
                        </div>
                        <div className="service-content">
                          <h5 className="mb-4">Cultural Experiences</h5>
                          <p className="mb-0">
                            Immerse yourself in Nigeria’s rich cultural heritage
                            through our curated experiences. Participate in
                            traditional cooking classNamees, enjoy captivating
                            music and dance performances, or explore local art
                            workshops to gain a deeper appreciation of the
                            country’s vibrant traditions.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="service-content-inner d-flex align-items-center bg-white border border-success rounded p-4 ps-0">
                        <div className="service-icon p-4">
                          <i className="fa fa-user fa-4x text-success"></i>
                        </div>
                        <div className="service-content">
                          <h5 className="mb-4">Adventure Travel</h5>
                          <p className="mb-0">
                            For the thrill-seekers, we offer exhilarating
                            adventure travel experiences, including hiking,
                            camping, and water sports. Discover Nigeria’s
                            breathtaking landscapes and natural wonders while
                            indulging in your passion for adventure.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="service-content-inner d-flex align-items-center bg-white border border-success rounded p-4 ps-0">
                        <div className="service-icon p-4">
                          <i className="fa fa-cog fa-4x text-success"></i>
                        </div>
                        <div className="service-content">
                          <h5 className="mb-4">Corporate Travel Solutions</h5>
                          <p className="mb-0">
                            We understand the unique needs of business travelers
                            and offer tailored corporate travel solutions. From
                            streamlined booking processes to specialized
                            itineraries, we ensure your business trips are
                            efficient, comfortable, and productive.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            <div className="col-12">
              <div className="text-center">
                <Link
                  className="btn btn-success rounded-pill py-3 px-5 mt-2"
                  to="/services"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
