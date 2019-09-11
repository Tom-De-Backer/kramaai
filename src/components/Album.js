import React, { Component } from "react";

import { photos2009 } from "../images/photos2009";
import { photos2019 } from "../images/photos2019";

import "../styles/Album.css";

// Use this video for the slideshow or the slideshow from home screen
// https://www.youtube.com/watch?v=AqOaI41TADU

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: undefined
    };
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    let temp = undefined;
    switch (params.id) {
      case "album2009":
        temp = photos2009;
        break;
      case "album2010":
        temp = photos2009;
        break;
      case "album2019":
        temp = photos2019;
        break;
      default:
        temp = photos2009;
    }
    this.setState({
      id: temp
    });
  }

  render() {
    return (
      <div>
        {this.state.id !== undefined && (
          <div className="albumDiv">
            <img
              src="http://kramaai.be/images/photoalbum/album_6/1.jpg"
              alt="Test"
              className="albumImage"
            />
            <img
              src="http://kramaai.be/images/photoalbum/album_6/3.jpg"
              alt="Test"
              className="albumImage"
            />
            <img
              src="http://kramaai.be/images/photoalbum/album_6/6.jpg"
              alt="Test"
              className="albumImage"
            />
          </div>
        )}
      </div>
    );
  }
}

export default Album;
