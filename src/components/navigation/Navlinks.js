import React from "react";
import { Link } from "react-router-dom";

const Navlinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/leiding" className="link">
          Leiding
        </Link>
      </li>
      <li>
        <Link to="/inschrijven" className="link">
          Inschrijven
        </Link>
      </li>
    </ul>
  );
};

export default Navlinks;
