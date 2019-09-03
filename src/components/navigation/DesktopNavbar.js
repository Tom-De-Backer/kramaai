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

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    height: 15vh;

    padding: 0 1rem;
    border-radius: 10px

    &:focus {
      background: rgba(0, 0, 0, 0.1);
      outline: none;
    }

    &::after {
      content: "";
      height: 2px;
      width: 0px;
      background: white;
      display: block;
      transition: width 0.5s;
    }

    &:hover::after {
      width: 115%;
      transform: width;
    }
  }
`;

const MyMobileNavButton = styled.button`
  background: ${props => props.theme.primary};
  height: 6vh;
  width: 6vh;
  border: none;
  display: none;

  transition: transform 1s ease-in-out;
  transform: rotate(
    ${props => (props.displayMobileNavbar ? "540deg" : "0deg ")}
  );

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const DesktopNavbar = props => {
  return (
    <MyDesktopNavbar>
      <div className="logo">Kramaai</div>

      <Navlinks />

      <MyMobileNavButton
        onClick={props.toggleMobileNavbar}
        displayMobileNavbar={props.displayMobileNavbar}
      >
        <img src={mobileNavIcon} alt="This is the navv" />
      </MyMobileNavButton>
    </MyDesktopNavbar>
  );
};

export default DesktopNavbar;
