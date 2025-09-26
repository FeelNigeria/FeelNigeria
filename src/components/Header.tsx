import React from "react";
import { Link } from "react-router-dom";

interface Props {
  child?: string;
  linkName?: string;
  style?: React.CSSProperties;
}

const Header: React.FC<Props> = ({ child, linkName, style }) => {
  return (
    <div className="container-fluid bg-breadcrumb" style={style}>
      <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
        <h3 className="text-white display-3 mb-4">{child || "Our Services"}</h3>
        <ol className="breadcrumb justify-content-center mb-0 text-decoration-none">
          <li className="breadcrumb-item text-decoration-none">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item text-decoration-none">
            <Link to="/pages">Pages</Link>
          </li>
          <Link to="/services" className="breadcrumb-item active text-white">
            {linkName || "Services"}
          </Link>
        </ol>
      </div>
    </div>
  );
};

export default Header;
