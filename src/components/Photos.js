import React, { Component } from "react";

import "../styles/Photos.css";

// Photos react: http://neptunian.github.io/react-photo-gallery/

class Photos extends Component {
  openAlbum = number => {
    console.log("Clicked on button: " + number);
  };

  render() {
    return (
      <div className="photosDiv">
        <button onClick={() => this.openAlbum(2009)} className="button">
          Album 2009
        </button>
        <button onClick={() => this.openAlbum(2010)} className="button">
          Album 2010
        </button>
        <button onClick={() => this.openAlbum(2019)} className="button">
          Album 2019
        </button>
      </div>
    );
  }
}

export default Photos;
