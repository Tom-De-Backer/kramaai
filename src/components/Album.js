import React, { Component } from "react";

import Gallery from "react-photo-gallery";
import { photos2009 } from "../images/photos2009";
import { photos2019 } from "../images/photos2019";

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
        {this.state.id !== undefined && <Gallery photos={this.state.id} />}
      </div>
    );
  }
}

export default Album;
