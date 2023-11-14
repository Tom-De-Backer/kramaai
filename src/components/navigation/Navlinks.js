import React from "react";
import {NavLink} from "react-router-dom";

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
      {/* <li>
        <NavLink to="/diaavond" className="link" tabIndex={tempTabIndex}>
          Dia-avond
        </NavLink>
      </li> */}
      {/* <li>
        <NavLink to="/etentje" className="link" tabIndex={tempTabIndex}>
          Etentje
        </NavLink>
      </li> */}
      {/* <li>
        <NavLink to="/inschrijven" className="link" tabIndex={tempTabIndex}>
          Inschrijven
        </NavLink>
      </li>       */}
      {/* <li>
        <NavLink to="/wijn" className="link" tabIndex={tempTabIndex}>
          Wijn
        </NavLink>
      </li> */}
      <li>
        <NavLink to="/leiding" className="link" tabIndex={tempTabIndex}>
          Leiding
        </NavLink>
      </li>
      <li>
        <NavLink to="/kramaai" className="link" tabIndex={tempTabIndex}>
          Kramaai
        </NavLink>
      </li>
      <li>
        <NavLink to="/takken" className="link" tabIndex={tempTabIndex}>
          Takken
        </NavLink>
      </li>
      <li>
        <NavLink to="/verhuur" className="link" tabIndex={tempTabIndex}>
          Verhuur
        </NavLink>
      </li>
      <li>
        <NavLink to="/fotos" className="link" tabIndex={tempTabIndex}>
          Foto's
        </NavLink>
      </li>
      <li>
        <NavLink to="/faq" className="link" tabIndex={tempTabIndex}>
          FAQ
        </NavLink>
      </li>
    </ul>
  );
};

export default Navlinks;
