import React, { Component } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import styled from "styled-components";

const MyNavbar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;

  overflow-x: hidden;
  overflow-y: hidden;
`;

class Navbar extends Component {
  state = {
    displayMobileNavbar: false
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.checkAndAutoHideMobileNavbar);
    this.checkAndAutoHideMobileNavbar();
    this.node.addEventListener("click", this.toggleMobileNavbar);
  };

  componentDidUpdate = () => {};

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.checkAndAutoHideMobileNavbar);
    this.node.removeEventListener("click", this.toggleMobileNavbar);
  };

  toggleMobileNavbar = () => {
    this.setState(prevstate => {
      return { displayMobileNavbar: !prevstate.displayMobileNavbar };
    });
  };

  checkAndAutoHideMobileNavbar = () => {
    const screenWidth = window.innerWidth;

    if (this.state.displayMobileNavbar && screenWidth > 768) {
      this.setState({
        displayMobileNavbar: false
      });
    }
  };

  render() {
    return (
      <MyNavbar>
        <DesktopNavbar
          toggleMobileNavbar={this.toggleMobileNavbar}
          displayMobileNavbar={this.state.displayMobileNavbar}
        />
        {/* Check whether an element in navlinks is being clicked to let the menu disappear */}
        <span ref={node => (this.node = node)}>
          <MobileNavbar displayMobileNavbar={this.state.displayMobileNavbar} />
        </span>
      </MyNavbar>
    );
  }
}

export default Navbar;
