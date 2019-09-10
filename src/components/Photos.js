import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import "../styles/Photos.css";

// Photos react: http://neptunian.github.io/react-photo-gallery/

class Photos extends Component {
  render() {
    return (
      <div>
        <div className="photosButtonsDiv">
          <NavLink to="/fotos/album2009" className="button">
            Album 2009
          </NavLink>
          <NavLink to="/fotos/album2010" className="button">
            Album 2010
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
