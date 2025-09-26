const Copyright = () => {
  return (
    <div className="container-fluid copyright text-body py-4 bg-dark">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-6 text-center text-md-end mb-md-0 text-secondary">
            <i className="fas fa-copyright me-2 text-secondary"></i>
            <a className="text-white" href="#">
              Feel Nigeria
            </a>
            , All right reserved.
          </div>
          <div className="col-md-6 text-center text-md-start text-secondary">
            Designed By{" "}
            <a className="text-white" href="https://feelnigeria.com">
              Feel Nigeria
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
