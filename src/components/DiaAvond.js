import React, { Component } from "react";

import "../styles/DiaAvond.css";

import SideSpace from "./SideSpace";
import SideWidget from "./SideWidget";

class DiaAvond extends Component {
  render() {
    return (
      <div className="diaavondDiv">
        <SideSpace />
        <section className="diaavondSection">
          <div className="diaavondTitle">Dia-avond</div>
          {/* <img src="https://kramaaiblog.files.wordpress.com/2020/08/leidersvoorstelling-en-dia-avond.jpg" alt="leidersvoorstelling" className="diaavondImage"/> */}
          <div className="diaavondText">
            <br />
            <iframe
            src="https://docs.google.com/forms/d/1q402J7NHXtX6zsU3PR0eX4b97eT_SPU1VRRYBQZAd2w/viewform?embedded=true"
            width="95%"
            height="1745"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="Newsletter form"
          >
            Laden…
          </iframe>
            <br />
          </div>
        </section>
        <SideWidget />
        <SideSpace />
      </div>
    );
  }
}

export default DiaAvond;
