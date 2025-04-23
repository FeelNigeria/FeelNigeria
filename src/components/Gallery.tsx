import GalleryOverlay from "./GalleryOverlay";
import GalleryTab from "./GalleryTab";

const GalleryTabDetails = [
  {
    galleryNumber: 1,
    className: "4 col-xl-2",
  },
  {
    galleryNumber: 2,
    className: "4 col-xl-3",
  },
  {
    galleryNumber: 3,
    className: "4 col-xl-2",
  },
  {
    galleryNumber: 4,
    className: "4 col-xl-3",
  },
  {
    galleryNumber: 5,
    className: "4 col-xl-2",
  },
  {
    galleryNumber: 6,
    className: "4 col-xl-2",
  },
  {
    galleryNumber: 7,
    className: "3 col-xl-3",
  },
  {
    galleryNumber: 8,
    className: "3 col-xl-2",
  },
  {
    galleryNumber: 9,
    className: "3 col-xl-3",
  },
  {
    galleryNumber: 10,
    className: "3 col-xl-2",
  },
];

const Gallery = () => {
  return (
    <div className="container-fluid gallery py-5 my-5">
      <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
        <h5 className="section-title px-3">Our Gallery</h5>
        <h1 className="mb-4">Tourism & Traveling Gallery.</h1>
        <p className="mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          tempore nam, architecto doloremque velit explicabo? Voluptate sunt
          eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum
          repellat a laborum quasi.
        </p>
      </div>
      <div className="tab-className text-center">
        <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
          <li className="nav-item">
            <a
              className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
              data-bs-toggle="pill"
              href="#GalleryTab-1"
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
              href="#GalleryTab-2"
            >
              <span className="text-dark" style={{ width: "150px" }}>
                World tour
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
              data-bs-toggle="pill"
              href="#GalleryTab-3"
            >
              <span className="text-dark" style={{ width: "150px" }}>
                Ocean Tour
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
              data-bs-toggle="pill"
              href="#GalleryTab-4"
            >
              <span className="text-dark" style={{ width: "150px" }}>
                Summer Tour
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
              data-bs-toggle="pill"
              href="#GalleryTab-5"
            >
              <span className="text-dark" style={{ width: "150px" }}>
                Sport Tour
              </span>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div id="GalleryTab-1" className="tab-pane fade show p-0 active">
            <div className="row g-2">
              {GalleryTabDetails.map((item, index) => (
                <GalleryTab
                  key={index}
                  galleryNumber={item.galleryNumber}
                  className={item.className}
                />
              ))}
            </div>
          </div>
          <div id="GalleryTab-2" className="tab-pane fade show p-0">
            <div className="row g-2">
              <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <div className="gallery-item h-100">
                  <img
                    src="src/assets/img/gallery-2.jpg"
                    className="img-fluid w-100 h-100 rounded"
                    alt="Image"
                  ></img>
                  <GalleryOverlay />
                  <div className="gallery-plus-icon">
                    <a
                      href="src/assets/img/gallery-2.jpg"
                      data-lightbox="gallery-2"
                      className="my-auto"
                    >
                      <i className="fas fa-plus fa-2x text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                <div className="gallery-item h-100">
                  <img
                    src="src/assets/img/gallery-3.jpg"
                    className="img-fluid w-100 h-100 rounded"
                    alt="Image"
                  ></img>
                  <GalleryOverlay />
                  <div className="gallery-plus-icon">
                    <a
                      href="src/assets/img/gallery-3.jpg"
                      data-lightbox="gallery-3"
                      className="my-auto"
                    >
                      <i className="fas fa-plus fa-2x text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="GalleryTab-3" className="tab-pane fade show p-0">
            <div className="row g-2">
              <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <div className="gallery-item h-100">
                  <img
                    src="src/assets/img/gallery-2.jpg"
                    className="img-fluid w-100 h-100 rounded"
                    alt="Image"
                  ></img>
                  <GalleryOverlay />
                  <div className="gallery-plus-icon">
                    <a
                      href="src/assets/img/gallery-2.jpg"
                      data-lightbox="gallery-2"
                      className="my-auto"
                    >
                      <i className="fas fa-plus fa-2x text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                <div className="gallery-item h-100">
                  <img
                    src="src/assets/img/gallery-3.jpg"
                    className="img-fluid w-100 h-100 rounded"
                    alt="Image"
                  ></img>
                  <GalleryOverlay />
                  <div className="gallery-plus-icon">
                    <a
                      href="src/assets/img/gallery-3.jpg"
                      data-lightbox="gallery-3"
                      className="my-auto"
                    >
                      <i className="fas fa-plus fa-2x text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="GalleryTab-4" className="tab-pane fade show p-0">
            <div className="row g-2">
              <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <div className="gallery-item h-100">
                  <img
                    src="src/assets/img/gallery-2.jpg"
                    className="img-fluid w-100 h-100 rounded"
                    alt="Image"
                  ></img>
                  <GalleryOverlay />
                  <div className="gallery-plus-icon">
                    <a
                      href="src/assets/img/gallery-2.jpg"
                      data-lightbox="gallery-2"
                      className="my-auto"
                    >
                      <i className="fas fa-plus fa-2x text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                <div className="gallery-item h-100">
                  <img
                    src="src/assets/img/gallery-3.jpg"
                    className="img-fluid w-100 h-100 rounded"
                    alt="Image"
                  ></img>
                  <GalleryOverlay />
                  <div className="gallery-plus-icon">
                    <a
                      href="src/assets/img/gallery-3.jpg"
                      data-lightbox="gallery-3"
                      className="my-auto"
                    >
                      <i className="fas fa-plus fa-2x text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="GalleryTab-5" className="tab-pane fade show p-0">
            <div className="row g-2">
              <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <div className="gallery-item h-100">
                  <img
                    src="src/assets/img/gallery-2.jpg"
                    className="img-fluid w-100 h-100 rounded"
                    alt="Image"
                  ></img>
                  <GalleryOverlay />
                  <div className="gallery-plus-icon">
                    <a
                      href="src/assets/img/gallery-2.jpg"
                      data-lightbox="gallery-2"
                      className="my-auto"
                    >
                      <i className="fas fa-plus fa-2x text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                <div className="gallery-item h-100">
                  <img
                    src="src/assets/img/gallery-3.jpg"
                    className="img-fluid w-100 h-100 rounded"
                    alt="Image"
                  ></img>
                  <GalleryOverlay />
                  <div className="gallery-plus-icon">
                    <a
                      href="src/assets/img/gallery-3.jpg"
                      data-lightbox="gallery-3"
                      className="my-auto"
                    >
                      <i className="fas fa-plus fa-2x text-white"></i>
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

export default Gallery;
