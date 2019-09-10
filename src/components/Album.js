import React, { Component } from "react";

import Gallery from "react-photo-gallery";
import { photos2009 } from "../images/photos2009";

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
    console.log(params);
    this.setState({
      id: params.id
    });
    // Hier een switch die via id een juist album toekent aan variabele die in render functie gebruikt wordt
    console.log(params.id);
  }

  render() {
    return (
      <div>
        {this.state.id === "album2019" && <Gallery photos={photos2009} />}
      </div>
    );
  }
}

export default Album;
