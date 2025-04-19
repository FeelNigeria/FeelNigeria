import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="footer-item d-flex flex-column">
      <h4 className="mb-4 text-white">Get In Touch</h4>
      <a href="">
        <i className="fas fa-home me-2"></i> 20, Ajasa Street off King George
        IV, Onikan Lagos Nigeria
      </a>
      <a href="">
        <i className="fas fa-envelope me-2"></i> info@feelnigeria.com
      </a>
      <a href="">
        <i className="fas fa-phone me-2"></i> +234 803 475 1038
      </a>
      <a href="" className="mb-3">
        <i className="fas fa-print me-2"></i> +234 802 892 4008
      </a>
      <div className="d-flex align-items-center">
        <i className="fas fa-share fa-2x text-white me-2"></i>
        <a className="btn-square btn btn-primary rounded-circle mx-1" href="">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a className="btn-square btn btn-primary rounded-circle mx-1" href="">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
