import React, { Component } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import styled from "styled-components";

const MyNavbar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`;

class Navbar extends Component {
  state = {
    displayMobileNavbar: true
  };

  render() {
    return (
      <MyNavbar>
        <DesktopNavbar />
        <MobileNavbar displayMobileNavbar={this.state.displayMobileNavbar} />
      </MyNavbar>
    );
  }
}

export default Navbar;
