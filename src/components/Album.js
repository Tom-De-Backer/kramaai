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
    let iframeBool = false;

    switch (params.id) {
      case "unknown":
        temp = photosUnknown;
        iframeBool = false;
        break;
      case "album2007":
        temp = photos2007;
        iframeBool = false;
        break;
      case "album2008":
        temp = photos2008;
        iframeBool = false;
        break;
      case "albumKamp2016":
        temp = "https://heyvaert.me/photo/embed/embed.html?album=album_53636f757473204b72616d616169204d6f6c6c656d2f323031362d3038204b616d70204269c3a8767265&openps=1&autoplay=1&lightbox=1";
        iframeBool = true;
        break;
      case "albumLaatsteVergadering2017":
        temp = "https://heyvaert.me/photo/embed/embed.html?album=album_53636f757473204b72616d616169204d6f6c6c656d2f323031372d3035204c616174737465207665726761646572696e67&openps=1&autoplay=1";
        iframeBool = true;
        break;
      case "album2019":
        temp = photos2019;
        iframeBool = false;
        break;
      default:
        temp = photosUnknown;
    }
    this.setState({
      id: temp,
      name: params.id,
      iframeBool: iframeBool
    });
  }

  render() {
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
      <div>
        {this.state.id !== undefined && (
          <div>
            {/* Splitst de titel bij hoofdletters en zet er spaties tussen */}
            <div className="albumTitle">{this.state.name.toString().match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</div>
            {this.state.iframeBool === false && (
              <div className="albumDiv">
                {this.state.id.map(url => (
                  <a href={url} key={url}>
                    <img src={url} alt={url} className="albumImage" />
                  </a>
                ))}
              </div>
            )}
            {this.state.iframeBool === true && (
              <div className="albumDivNoClick">
                <iframe
                  className="albumImageIFrame"
                  width="480"
                  height="320"
                  frameborder="0"
                  src={this.state.id}
                  title="Photostation"
                ></iframe>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Album;
