import React, { Component } from "react";

import "../styles/Videos.css";
import SideSpace from "./SideSpace";
import SideWidget from "./SideWidget";

import { NavLink } from "react-router-dom";

class Takken extends Component {
  render() {
    return (
      <div className="videosDiv">
        <SideSpace />
        <section className="videosDivDiv">
          <div className="videosTitle">Takken</div>
          <br />
          {/* titleTable is zelfde css als bij LeidingTable.css */}
          <div className="takkenButtons">
            {" "}
            <div className="titleTakkenGeneral">
              <NavLink to="/kapoenen">Kapoenen</NavLink>
            </div>
            <div className="titleTakkenGeneral">
              <NavLink to="/welpen">Welpen</NavLink>
            </div>
            <div className="titleTakkenGeneral">
              <NavLink to="/bevers">Bevers</NavLink>
            </div>
            <div className="titleTakkenGeneral">
              <NavLink to="/jonggivers">Jong-Givers</NavLink>
            </div>
            <div className="titleTakkenGeneral">
              <NavLink to="/givers">Givers</NavLink>
            </div>
            <div className="titleTakkenGeneral">
              <NavLink to="/jins">Jins</NavLink>
            </div>
            <div className="titleTakkenGeneral">
              <NavLink to="/groepsleiding">Groepsleiding</NavLink>
            </div>
          </div>
        </section>
        <SideWidget />
        <SideSpace />
      </div>
    );
  }
}

export default Takken;
