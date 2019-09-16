import React, { Component } from "react";

import "../styles/Verhuur.css";

import SideSpace from "./SideSpace";
import SideWidget from "./SideWidget";

import lokaal from "../images/lokaal.jpg";

class Verhuur extends Component {
  render() {
    return (
      <div className="verhuurDiv">
        <SideSpace />
        <section className="verhuurSection">
          <div className="verhuurTitle">Verhuur lokalen</div>
          <div className="verhuurAnswer">
            Momenteel worden onze lokalen nog niet verhuurd. Voor meer info of
            eventuele vragen kan u een mail sturen naar:{" "}
            <a href="mailto:groepsleiding@kramaai.be">
              groepsleiding@kramaai.be
            </a>
            <br />
            <br />
            <img src={lokaal} alt="verhuur lokaal" className="verhuurImage" />
          </div>
        </section>
        <SideWidget />
        <SideSpace />
      </div>
    );
  }
}

export default Verhuur;
