import React, { Component } from "react";

import "../styles/Wijn.css";

import SideSpace from "./SideSpace";
import SideWidget from "./SideWidget";


class Wijn extends Component {
  render() {
    return (
      <div className="wijnDiv">
        <SideSpace />
        <section className="wijnSection">
            <iframe src="https://kramaai.be/downloads/wijnJins.pdf#toolbar=0" width="100%" height="1000px" title="Wijnverkoop jins"></iframe>
        </section>
        <SideWidget />
        <SideSpace />
      </div>
    );
  }
}

export default Wijn;
