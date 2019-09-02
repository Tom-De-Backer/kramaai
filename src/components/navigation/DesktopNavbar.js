import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import mobileNavIcon from "../../images/mobile-nav-icon.svg";
// Icon from: https://material.io/resources/icons/?search=keyboard&icon=keyboard_arrow_left&style=baseline

const MyDesktopNavbar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  background: red;
  color: white;

  height: 15vh;

  .logo {
    font-size: 7vh;
    font-weight: bold;
    text-shadow: 3px 3px 3px black;
  }

  .nav-links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    list-style: none;
    width: 35vw;
  }

  .link {
    color: white;
    font-size: 2.5vh;
    text-decoration: none;
  }
`;

const MyMobileNavButton = styled.button`
  background: transparant;
  height: 6vh;
  width: 6vh;
  border: none;
`;

const DesktopNavbar = () => {
  return (
    <MyDesktopNavbar>
      <div className="logo">Logo</div>

      <ul className="nav-links">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </li>
      </ul>

      {/* <MyMobileNavButton>
        <img src={mobileNavIcon} alt="This is the navv" />
      </MyMobileNavButton> */}
    </MyDesktopNavbar>
  );
};

export default DesktopNavbar;
