
const Subscribe = () => {
  return (
    <div className="container-fluid subscribe py-5">
      <div className="container text-center py-5">
        <div className="mx-auto text-center" style={{ maxWidth: "900px" }}>
          <h5 className="subscribe-title px-3">Subscribe</h5>
          <h1 className="text-white mb-4">Our Newsletter</h1>
          <p className="text-white mb-5">
            <span>Experience Nigeria Like Never Before</span> We invite you to
            embark on an enriching journey with Feel Nigeria, where every
            destination tells a story, and every experience leaves a lasting
            impression. Whether you are visiting for leisure, business, or
            cultural exploration, we are here to make your Nigerian travel
            experience unforgettable.
          </p>
          <div className="position-relative mx-auto">
            <input
              className="form-control border-success rounded-pill w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            ></input>
            <button
              type="button"
              className="btn btn-success rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
