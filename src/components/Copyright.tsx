import React from "react";

const Copyright = () => {
  return (
    <div className="container-fluid copyright text-body py-4">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-6 text-center text-md-end mb-md-0">
            <i className="fas fa-copyright me-2"></i>
            <a className="text-white" href="#">
              Feel Nigeria
            </a>
            , All right reserved.
          </div>
          <div className="col-md-6 text-center text-md-start">
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
