import React, { Component } from "react";

import "../styles/Verhuur.css";

import SideSpace from "./SideSpace";
import SideWidget from "./SideWidget";

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
          </div>
        </section>
        <SideWidget />
        <SideSpace />
      </div>
    );
  }
}

export default Verhuur;
