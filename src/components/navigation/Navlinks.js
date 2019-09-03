import React from "react";
import { Link } from "react-router-dom";

const Navlinks = props => {
  let tempTabIndex;
  if (props.isMobileLink) {
    tempTabIndex = "-1";
  }
  return (
    <ul className="nav-links">
      <li>
        <Link to="/" className="link" tabIndex={tempTabIndex}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/leiding" className="link" tabIndex={tempTabIndex}>
          Leiding
        </Link>
      </li>
      <li>
        <Link to="/inschrijven" className="link" tabIndex={tempTabIndex}>
          Inschrijven
        </Link>
      </li>
    </ul>
  );
};

export default Navlinks;
