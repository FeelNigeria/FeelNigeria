import DestinationOverlay from "./DestinationOverlay";

const Destination = () => {
  return (
    <div className="container-fluid destination py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
          <h5 className="section-title px-3">Destination</h5>
          <h1 className="mb-0">Popular Destination</h1>
        </div>
        <div className="tab-className text-center">
          <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
            <li className="nav-item">
              <a
                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
                data-bs-toggle="pill"
                href="#tab-1"
              >
                <span className="text-dark" style={{ width: "150px" }}>
                  All
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#tab-2"
              >
                <span className="text-dark" style={{ width: "150px" }}>
                  Lagos State
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#tab-3"
              >
                <span className="text-dark" style={{ width: "150px" }}>
                  Cross River State
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#tab-4"
              >
                <span className="text-dark" style={{ width: "150px" }}>
                  Abuja
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#tab-5"
              >
                <span className="text-dark" style={{ width: "150px" }}>
                  Plateau State
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#tab-6"
              >
                <span className="text-dark" style={{ width: "150px" }}>
                  Niger State
                </span>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <div className="col-xl-8">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="destination-img">
                        <img
                          className="img-fluid rounded w-100"
                          src="img/destination-1.jpg"
                          alt=""
                        ></img>
                        <DestinationOverlay
                          location="Elegushi Beach"
                          dataLightbox="1"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="destination-img">
                        <img
                          className="img-fluid rounded w-100"
                          src="img/destination-2.jpg"
                          alt=""
                        ></img>
                        <DestinationOverlay
                          location="Obudu Mountain Resort"
                          dataLightbox="2"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="destination-img">
                        <img
                          className="img-fluid rounded w-100"
                          src="img/destination-7.jpg"
                          alt=""
                        ></img>
                        <DestinationOverlay
                          dataLightbox="7"
                          location="Aso Rock"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="destination-img">
                        <img
                          className="img-fluid rounded w-100"
                          src="img/destination-8.jpg"
                          alt=""
                        ></img>
                        <DestinationOverlay
                          dataLightbox="8"
                          location="Assop Falls & River"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="destination-img h-100">
                    <img
                      className="img-fluid rounded w-100 h-100"
                      src="img/destination-9.jpg"
                      style={{ objectFit: "cover", minHeight: "300px" }}
                      alt=""
                    ></img>
                    <DestinationOverlay location="Zuma Rock" dataLightbox="4" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="destination-img">
                    <img
                      className="img-fluid rounded w-100"
                      src="img/destination-4.jpg"
                      alt=""
                    ></img>
                    <DestinationOverlay
                      location="La Campagne Tropicana Beach"
                      dataLightbox="4"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="destination-img">
                    <img
                      className="img-fluid rounded w-100"
                      src="img/destination-5.jpg"
                      alt=""
                    ></img>
                    <DestinationOverlay
                      location="Obudu Cattle Ranch"
                      dataLightbox="5"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="destination-img">
                    <img
                      className="img-fluid rounded w-100"
                      src="img/destination-6.jpg"
                      alt=""
                    ></img>
                    <DestinationOverlay
                      location="Awhum Waterfalls"
                      dataLightbox="6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-2" className="tab-pane fade show p-0">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="destination-img">
                    <img
                      className="img-fluid rounded w-100"
                      src="img/destination-5.jpg"
                      alt=""
                    ></img>
                    <DestinationOverlay
                      location="Shere Hills"
                      dataLightbox="5"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="destination-img">
                    <img
                      className="img-fluid rounded w-100"
                      src="img/destination-6.jpg"
                      alt=""
                    ></img>
                    <DestinationOverlay location="Zuma Rock" dataLightbox="6" />
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-3" className="tab-pane fade show p-0">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="destination-img">
                    <img
                      className="img-fluid rounded w-100"
                      src="img/destination-5.jpg"
                      alt=""
                    ></img>
                    <DestinationOverlay
                      location="Tarkwa Bay Beach"
                      dataLightbox="5"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="destination-img">
                    <img
                      className="img-fluid rounded w-100"
                      src="img/destination-6.jpg"
                      alt=""
                    ></img>
                    <DestinationOverlay
                      location="Ibeno Beach"
                      dataLightbox="6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-4" className="tab-pane fade show p-0">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="destination-img">
                    <img
                      className="img-fluid rounded w-100"
                      src="img/destination-5.jpg"
                      alt=""
                    ></img>
                    <DestinationOverlay
                      location="Idanre Hills"
                      dataLightbox="5"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="destination-img">
                    <img
                      className="img-fluid rounded w-100"
                      src="img/destination-6.jpg"
                      alt=""
                    ></img>
                    <DestinationOverlay
                      location="Awhum Waterfalls"
                      dataLightbox="6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-5" className="tab-pane fade show p-0">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="destination-img">
                    <img
                      className="img-fluid rounded w-100"
                      src="img/destination-5.jpg"
                      alt=""
                    ></img>
                    <DestinationOverlay
                      location="Owu Waterfalls"
                      dataLightbox="5"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="destination-img">
                    <img
                      className="img-fluid rounded w-100"
                      src="img/destination-6.jpg"
                      alt=""
                    ></img>
                    <DestinationOverlay
                      location="Erin Ijesha Waterfalls (Olumirin Waterfalls)"
                      dataLightbox="6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-6" className="tab-pane fade show p-0">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="destination-img">
                    <img
                      className="img-fluid rounded w-100"
                      src="img/destination-5.jpg"
                      alt=""
                    ></img>
                    <DestinationOverlay
                      location="Chevron WildLife"
                      dataLightbox="5"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="destination-img">
                    <img
                      className="img-fluid rounded w-100"
                      src="img/destination-6.jpg"
                      alt=""
                    ></img>
                    <DestinationOverlay
                      location="Omu Resort"
                      dataLightbox="6"
                    />
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

export default Destination;
