import React from "react";
import styled from "styled-components";
import Navlinks from "./Navlinks";

const MyMobileNavbar = styled.nav`
  width: 100%;
  background: ${props => props.theme.primary};
  align-self: flex-end;

  margin-bottom: 15 px

  box-shadow: -10px 10px 5px ${props => props.theme.accent};

  transition: transform 1s;
  transform: translateY(
    ${props => (props.displayMobileNavbar ? "0%" : "-155%")}
  );

  transition: transform 0.7s;
  transform: height;
  height: ${props => (props.displayMobileNavbar ? "60vh" : "0vh")}

  .nav-links {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;

    list-style: none;

    height: 60vh;  
  }

  .link {
    color: white;
    font-size: 2.5vh;
    text-decoration: none;
  }
`;

const MobileNavbar = props => {
  return (
    <MyMobileNavbar displayMobileNavbar={props.displayMobileNavbar}>
      <Navlinks isMobileLink={true} />
    </MyMobileNavbar>
  );
};

export default MobileNavbar;
