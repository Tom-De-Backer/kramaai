import React from "react";
import styled from "styled-components";
import Navlinks from "./Navlinks";

import mobileNavIcon from "../../images/mobile-nav-icon.svg";
// Icon from: https://material.io/resources/icons/?search=keyboard&icon=keyboard_arrow_left&style=baseline

const MyDesktopNavbar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  background: ${props => props.theme.primary};
  color: white;

  height: 15vh;

  .logo {
    font-size: 7vh;
    font-weight: bold;
    text-shadow: 5px 5px 2px ${props => props.theme.accent};
  }

  box-shadow: 0 10px 5px ${props => props.theme.accent};

  .nav-links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    list-style: none;
    width: 35vw;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .link {
    color: white;
    font-size: 2.5vh;
    text-decoration: none;
  }
`;

const MyMobileNavButton = styled.button`
  background: ${props => props.theme.primary};
  height: 6vh;
  width: 6vh;
  border: none;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const DesktopNavbar = () => {
  return (
    <MyDesktopNavbar>
      <div className="logo">Kramaai</div>

      <Navlinks />

      <MyMobileNavButton>
        <img src={mobileNavIcon} alt="This is the navv" />
      </MyMobileNavButton>
    </MyDesktopNavbar>
  );
};

export default DesktopNavbar;
