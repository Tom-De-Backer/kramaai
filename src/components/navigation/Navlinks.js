import React from "react";
import { NavLink } from "react-router-dom";

const Navlinks = props => {
  let tempTabIndex;
  if (props.isMobileLink) {
    tempTabIndex = "-1";
  }
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" className="link" tabIndex={tempTabIndex}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/leiding" className="link" tabIndex={tempTabIndex}>
          Leiding
        </NavLink>
      </li>
      <li>
        <NavLink to="/inschrijven" className="link" tabIndex={tempTabIndex}>
          Inschrijven
        </NavLink>
      </li>{" "}
      <li>
        <NavLink to="/fotos" className="link" tabIndex={tempTabIndex}>
          Foto's
        </NavLink>
      </li>
    </ul>
  );
};

export default Navlinks;
