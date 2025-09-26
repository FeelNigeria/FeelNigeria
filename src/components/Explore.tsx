import exploreTour1 from "../assets/img/explore-tour-1.jpg";
import exploreTour2 from "../assets/img/explore-tour-2.jpg";
import exploreTour3 from "../assets/img/explore-tour-3.jpg";
import exploreTour4 from "../assets/img/explore-tour-4.jpg";
import exploreTour5 from "../assets/img/explore-tour-5.jpg";
import exploreTour6 from "../assets/img/explore-tour-6.jpg";

const Explore = () => {
  return (
    <div className="container-fluid ExploreTour py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
          <h5 className="section-title px-3">Explore Tour</h5>
          <h1 className="mb-4">Nigeria</h1>
          <p className="mb-0">
            Discover Nigeria through our carefully curated tour packages,
            designed to offer enriching and unforgettable experiences. Whether
            you are passionate about culture, adventure, or gastronomy, our
            tours provide a unique opportunity to explore the diverse landscapes
            and traditions of Nigeria.
          </p>
        </div>
        <div className="tab-className text-center">
          <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
            <li className="nav-item">
              <a
                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
                data-bs-toggle="pill"
                href="#NationalTab-1"
              >
                <span className="text-dark" style={{ width: "250px" }}>
                  Cultural Tours
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#InternationalTab-2"
              >
                <span className="text-dark" style={{ width: "250px" }}>
                  Adventure Tours
                </span>
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div id="NationalTab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                  <div className="national-item">
                    <img
                      src={exploreTour1}
                      className="img-fluid w-100 rounded"
                      alt="Image"
                    ></img>
                    <div className="national-content">
                      <div className="national-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Weekend Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2"></i>
                        </a>
                      </div>
                    </div>
                    <div className="national-plus-icon">
                      <a href="#" className="my-auto">
                        <i className="fas fa-link fa-2x text-white"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="national-item">
                    <img
                      src={exploreTour2}
                      className="img-fluid w-100 rounded"
                      alt="Image"
                    ></img>
                    <div className="national-content">
                      <div className="national-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Holiday Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2"></i>
                        </a>
                      </div>
                    </div>
                    <div className="national-plus-icon">
                      <a href="#" className="my-auto">
                        <i className="fas fa-link fa-2x text-white"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="national-item">
                    <img
                      src={exploreTour3}
                      className="img-fluid w-100 rounded"
                      alt="Image"
                    ></img>
                    <div className="national-content">
                      <div className="national-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Road Trip
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2"></i>
                        </a>
                      </div>
                    </div>
                    <div className="tour-offer bg-info">15% Off</div>
                    <div className="national-plus-icon">
                      <a href="#" className="my-auto">
                        <i className="fas fa-link fa-2x text-white"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="national-item">
                    <img
                      src={exploreTour4}
                      className="img-fluid w-100 rounded"
                      alt="Image"
                    ></img>
                    <div className="national-content">
                      <div className="national-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Historical Trip
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2"></i>
                        </a>
                      </div>
                    </div>
                    <div className="national-plus-icon">
                      <a href="#" className="my-auto">
                        <i className="fas fa-link fa-2x text-white"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="national-item">
                    <img
                      src={exploreTour5}
                      className="img-fluid w-100 rounded"
                      alt="Image"
                    ></img>
                    <div className="national-content">
                      <div className="national-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Family Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2"></i>
                        </a>
                      </div>
                    </div>
                    <div className="tour-offer bg-warning">5% Off</div>
                    <div className="national-plus-icon">
                      <a href="#" className="my-auto">
                        <i className="fas fa-link fa-2x text-white"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="national-item">
                    <img
                      src={exploreTour6}
                      className="img-fluid w-100 rounded"
                      alt="Image"
                    ></img>
                    <div className="national-content">
                      <div className="national-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Beach Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2"></i>
                        </a>
                      </div>
                    </div>
                    <div className="national-plus-icon">
                      <a href="#" className="my-auto">
                        <i className="fas fa-link fa-2x text-white"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="InternationalTab-2" className="tab-pane fade show p-0">
              <div className="InternationalTour-carousel owl-carousel">
                <div className="international-item">
                  <img
                    src={exploreTour1}
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  ></img>
                  <div className="international-content">
                    <div className="international-info">
                      <h5 className="text-white text-uppercase mb-2">
                        Australia
                      </h5>
                      <a href="#" className="btn-hover text-white me-4">
                        <i className="fas fa-map-marker-alt me-1"></i> 8 Cities
                      </a>
                      <a href="#" className="btn-hover text-white">
                        <i className="fa fa-eye ms-2"></i>{" "}
                        <span>143+ Tour Places</span>
                      </a>
                    </div>
                  </div>
                  <div className="tour-offer bg-success">3% Off</div>
                  <div className="international-plus-icon">
                    <a href="#" className="my-auto">
                      <i className="fas fa-link fa-2x text-white"></i>
                    </a>
                  </div>
                </div>
                <div className="international-item">
                  <img
                    src={exploreTour2}
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  ></img>
                  <div className="international-content">
                    <div className="international-info">
                      <h5 className="text-white text-uppercase mb-2">
                        Germany
                      </h5>
                      <a href="#" className="btn-hover text-white me-4">
                        <i className="fas fa-map-marker-alt me-1"></i> 12 Cities
                      </a>
                      <a href="#" className="btn-hover text-white">
                        <i className="fa fa-eye ms-2"></i>{" "}
                        <span>21+ Tour Places</span>
                      </a>
                    </div>
                  </div>
                  <div className="international-plus-icon">
                    <a href="#" className="my-auto">
                      <i className="fas fa-link fa-2x text-white"></i>
                    </a>
                  </div>
                </div>
                <div className="international-item">
                  <img
                    src={exploreTour3}
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  ></img>
                  <div className="international-content">
                    <div className="tour-offer bg-warning">5% Off</div>
                    <div className="international-info">
                      <h5 className="text-white text-uppercase mb-2">Spain</h5>
                      <a href="#" className="btn-hover text-white me-4">
                        <i className="fas fa-map-marker-alt me-1"></i> 9 Cities
                      </a>
                      <a href="#" className="btn-hover text-white">
                        <i className="fa fa-eye ms-2"></i>{" "}
                        <span>133+ Tour Places</span>
                      </a>
                    </div>
                  </div>
                  <div className="international-plus-icon">
                    <a href="#" className="my-auto">
                      <i className="fas fa-link fa-2x text-white"></i>
                    </a>
                  </div>
                </div>
                <div className="international-item">
                  <img
                    src={exploreTour4}
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  ></img>
                  <div className="international-content">
                    <div className="international-info">
                      <h5 className="text-white text-uppercase mb-2">Japan</h5>
                      <a href="#" className="btn-hover text-white me-4">
                        <i className="fas fa-map-marker-alt me-1"></i> 8 Cities
                      </a>
                      <a href="#" className="btn-hover text-white">
                        <i className="fa fa-eye ms-2"></i>{" "}
                        <span>137+ Tour Places</span>
                      </a>
                    </div>
                  </div>
                  <div className="international-plus-icon">
                    <a href="#" className="my-auto">
                      <i className="fas fa-link fa-2x text-white"></i>
                    </a>
                  </div>
                </div>
                <div className="international-item">
                  <img
                    src={exploreTour5}
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  ></img>
                  <div className="international-content">
                    <div className="tour-offer bg-info">7% Off</div>
                    <div className="international-info">
                      <h5 className="text-white text-uppercase mb-2">London</h5>
                      <a href="#" className="btn-hover text-white me-4">
                        <i className="fas fa-map-marker-alt me-1"></i> 17 Cities
                      </a>
                      <a href="#" className="btn-hover text-white">
                        <i className="fa fa-eye ms-2"></i>{" "}
                        <span>26+ Tour Places</span>
                      </a>
                    </div>
                  </div>
                  <div className="international-plus-icon">
                    <a href="#" className="my-auto">
                      <i className="fas fa-link fa-2x text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
