import guideImg1 from "../assets/img/tour-guide-1.jpg";
import guideImg2 from "../assets/img/tour-guide-2.png";
import guideImg3 from "../assets/img/tour-guide-3.png";
import guideImg4 from "../assets/img/tour-guide-4.png";

const TravelGuide = () => {
  return (
    <div className="container-fluid guide py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
          <h5 className="section-title px-3">Travel Guide</h5>
          <h1 className="mb-0">Meet Our Guide</h1>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="guide-item">
              <div className="guide-img">
                <div className="guide-img-efects">
                  <img
                    src={guideImg1}
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                  ></img>
                </div>
                <div className="guide-icon rounded-pill p-2">
                  <a
                    className="btn btn-square btn-success rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-square btn-success rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-square btn-success rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-square btn-success rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div className="guide-title text-center rounded-bottom p-4">
                <div className="guide-title-inner">
                  <h4 className="mt-3">Segun Akintola</h4>
                  <p className="mb-0">Team Lead</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="guide-item">
              <div className="guide-img">
                <div className="guide-img-efects">
                  <img
                    src={guideImg2}
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                  ></img>
                </div>
                <div className="guide-icon rounded-pill p-2">
                  <a
                    className="btn btn-square btn-success rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-square btn-success rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-square btn-success rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-square btn-success rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div className="guide-title text-center rounded-bottom p-4">
                <div className="guide-title-inner">
                  <h4 className="mt-3">Daniel Akintola</h4>
                  <p className="mb-0">Tourist Guide</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="guide-item">
              <div className="guide-img">
                <div className="guide-img-efects">
                  <img
                    src={guideImg3}
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                  ></img>
                </div>
                <div className="guide-icon rounded-pill p-2">
                  <a
                    className="btn btn-square btn-success rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-square btn-success rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-square btn-success rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-square btn-success rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div className="guide-title text-center rounded-bottom p-4">
                <div className="guide-title-inner">
                  <h4 className="mt-3">Zara Okoye</h4>
                  <p className="mb-0">Tourist Guide</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="guide-item">
              <div className="guide-img">
                <div className="guide-img-efects">
                  <img
                    src={guideImg4}
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                  ></img>
                </div>
                <div className="guide-icon rounded-pill p-2">
                  <a
                    className="btn btn-square btn-success rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-square btn-success rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-square btn-success rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-square btn-success rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div className="guide-title text-center rounded-bottom p-4">
                <div className="guide-title-inner">
                  <h4 className="mt-3">Amara Ndlovu</h4>
                  <p className="mb-0">Tourist Guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelGuide;
