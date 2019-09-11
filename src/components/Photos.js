import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import "../styles/Photos.css";

// Photos react: http://neptunian.github.io/react-photo-gallery/

class Photos extends Component {
  render() {
    return (
      <div>
        <div className="photosButtonsDiv">
          {/* <NavLink to="/fotos/unknown" className="button">
            Album onbekend jaar
          </NavLink> */}
          <NavLink to="/fotos/album2007" className="button">
            Album 2007
          </NavLink>
          <NavLink to="/fotos/album2008" className="button">
            Album 2008
          </NavLink>
          <NavLink to="/fotos/album2019" className="button">
            Album 2019
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Photos;
