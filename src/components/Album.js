import React, { Component } from "react";
import ReactGA from "react-ga";

import {
  photosUnknown,
  photos2007,
  photos2008,
  photos2019
} from "../images/photosURLs";

import "../styles/Album.css";

// Use this video for the slideshow or the slideshow from home screen
// https://www.youtube.com/watch?v=AqOaI41TADU

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      name: undefined
    };
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    let temp = undefined;

    switch (params.id) {
      case "unknown":
        temp = photosUnknown;
        break;
      case "album2007":
        temp = photos2007;
        break;
      case "album2008":
        temp = photos2008;
        break;
      case "album2019":
        temp = photos2019;
        break;
      default:
        temp = photosUnknown;
    }
    this.setState({
      id: temp,
      name: params.id
    });
  }

  render() {
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
      <div>
        {this.state.id !== undefined && (
          <div>
            <div className="albumTitle">{this.state.name.toString()}</div>
            <div className="albumDiv">
              {this.state.id.map(url => (
                <a href={url} key={url}>
                  <img src={url} alt={url} className="albumImage" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Album;
