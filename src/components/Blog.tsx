const Blog = () => {
  return (
    <div className="container-fluid blog py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
          <h5 className="section-title px-3">Our Blog</h5>
          <h1 className="mb-4">Popular Travel Blogs</h1>
          <p className="mb-0">
            We invite you to explore some of our most popular travel blogs,
            carefully curated to showcase the beauty, culture, and culinary
            delights of Nigeria. Whether you are a seasoned traveler or simply
            looking for inspiration for your next adventure, these blogs offer
            valuable insights into some of Nigeria’s most fascinating
            destinations.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="blog-item">
              <div className="blog-img">
                <div className="blog-img-inner">
                  <img
                    className="img-fluid w-100 rounded-top"
                    src="img/blog-1.jpg"
                    alt="Image"
                  ></img>
                  <div className="blog-icon">
                    <a href="#" className="my-auto">
                      <i className="fas fa-link fa-2x text-white"></i>
                    </a>
                  </div>
                </div>
                <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt text-success me-2"></i>28
                    Jan 2050
                  </small>
                  <a
                    href="#"
                    className="btn-hover flex-fill text-center text-white border-end py-2"
                  >
                    <i className="fa fa-thumbs-up text-success me-2"></i>1.7K
                  </a>
                  <a
                    href="#"
                    className="btn-hover flex-fill text-center text-white py-2"
                  >
                    <i className="fa fa-comments text-success me-2"></i>1K
                  </a>
                </div>
              </div>
              <div className="blog-content border border-top-0 rounded-bottom p-4">
                <p className="mb-3">Posted By: Segun Akintola </p>
                <a href="#" className="h4">
                  Discovering Nigeria’s Hidden Gems
                </a>
                <p className="my-3">
                  Take a journey through Nigeria’s lesser-known but breathtaking
                  locations, including ancient ruins, majestic waterfalls, and
                  traditional villages that reflect the country’s rich heritage.
                </p>
                <a href="#" className="btn btn-success rounded-pill py-2 px-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-item">
              <div className="blog-img">
                <div className="blog-img-inner">
                  <img
                    className="img-fluid w-100 rounded-top"
                    src="img/blog-2.jpg"
                    alt="Image"
                  ></img>
                  <div className="blog-icon">
                    <a href="#" className="my-auto">
                      <i className="fas fa-link fa-2x text-white"></i>
                    </a>
                  </div>
                </div>
                <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt text-success me-2"></i>28
                    Jan 2050
                  </small>
                  <a
                    href="#"
                    className="btn-hover flex-fill text-center text-white border-end py-2"
                  >
                    <i className="fa fa-thumbs-up text-success me-2"></i>1.7K
                  </a>
                  <a
                    href="#"
                    className="btn-hover flex-fill text-center text-white py-2"
                  >
                    <i className="fa fa-comments text-success me-2"></i>1K
                  </a>
                </div>
              </div>
              <div className="blog-content border border-top-0 rounded-bottom p-4">
                <p className="mb-3">Posted By: Segun Akintola </p>
                <a href="#" className="h4">
                  A Foodie’s Guide to Nigeria
                </a>
                <p className="my-3">
                  Experience the diverse and vibrant food culture of Nigeria.
                  From traditional delicacies and flavorful street food to
                  exquisite fine dining, this guide provides an in-depth look
                  into Nigeria’s culinary treasures.
                </p>
                <a href="#" className="btn btn-success rounded-pill py-2 px-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-item">
              <div className="blog-img">
                <div className="blog-img-inner">
                  <img
                    className="img-fluid w-100 rounded-top"
                    src="img/blog-3.jpg"
                    alt="Image"
                  ></img>
                  <div className="blog-icon">
                    <a href="#" className="my-auto">
                      <i className="fas fa-link fa-2x text-white"></i>
                    </a>
                  </div>
                </div>
                <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt text-success me-2"></i>28
                    Jan 2050
                  </small>
                  <a
                    href="#"
                    className="btn-hover flex-fill text-center text-white border-end py-2"
                  >
                    <i className="fa fa-thumbs-up text-success me-2"></i>1.7K
                  </a>
                  <a
                    href="#"
                    className="btn-hover flex-fill text-center text-white py-2"
                  >
                    <i className="fa fa-comments text-success me-2"></i>1K
                  </a>
                </div>
              </div>
              <div className="blog-content border border-top-0 rounded-bottom p-4">
                <p className="mb-3">Posted By: Segun Akintola </p>
                <a href="#" className="h4">
                  Nigeria’s Best Kept Secrets
                </a>
                <p className="my-3">
                  Unveil the hidden beauty of Nigeria, from serene, untouched
                  beaches and picturesque hiking trails to colorful cultural
                  festivals that celebrate the nation’s history and traditions.
                </p>
                <a href="#" className="btn btn-success rounded-pill py-2 px-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
