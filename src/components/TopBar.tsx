import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="bg-success text-white py-2 px-4 d-flex justify-content-between align-items-center">
      <div className="d-flex gap-3">
        <a href="#">
          <i className="bi bi-twitter text-white"></i>
        </a>
        <a href="#">
          <i className="bi bi-facebook text-white"></i>
        </a>
        <a href="#">
          <i className="bi bi-linkedin text-white"></i>
        </a>
        <a href="#">
          <i className="bi bi-instagram text-white"></i>
        </a>
        <a href="#">
          <i className="bi bi-youtube text-white"></i>
        </a>
      </div>
      <div className="d-flex gap-3">
        <Link to="/registration" className="nav-link text-light">
          <i className="fas fa-user me-2"></i> Register
        </Link>
        <Link to="/login" className="nav-link text-light">
          <i className="fa fa-sign-in-alt me-2"></i> Login
        </Link>
        <div className="dropdown">
          <a
            href="#"
            className="dropdown-toggle text-light nav-link"
            data-bs-toggle="dropdown"
          >
            <small>
              <i className="fa fa-home me-2"></i> My Dashboard
            </small>
          </a>
          <div className="dropdown-menu rounded">
            <a href="#" className="dropdown-item">
              <i className="fas fa-user-alt me-2"></i> My Profile
            </a>
            <a href="#" className="dropdown-item">
              <i className="fas fa-comment-alt me-2"></i> Inbox
            </a>
            <a href="#" className="dropdown-item">
              <i className="fas fa-bell me-2"></i> Notifications
            </a>
            <a href="#" className="dropdown-item">
              <i className="fas fa-cog me-2"></i> Account Settings
            </a>
            <a href="#" className="dropdown-item">
              <i className="fas fa-power-off me-2"></i> Log Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
