import React, { Component } from "react";

import "../../styles/Takken.css";
import SideWidget from "../SideWidget";
import SideSpace from "../SideSpace";

import { Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";

class Kapoenen extends Component {
  render() {
    return (
      <div>
        <section className="info">
          <SideSpace />
          <div className="textDiv">
            <div className="titleTakken">Kapoenen</div>
            <div className="mailadresTakken">
              <a href="mailto:Kapoenen@kramaai.be">Kapoenen@kramaai.be</a>
            </div>
            <p className="paragraphTakken">
              Kapoenen zijn 6 tot 8 jaar. Ze ontdekken al spelend wat het is om
              scout of gids te zijn. Het leven van een kapoen is vol spel en
              fantasie. De leiding bedenkt spelen op maat van kapoenen en laat
              genoeg ruimte om op hun eigen impulsen in te gaan. Wat vinden ze
              leuk en wat kunnen ze al op die leeftijd?
              <br />
              <br />
              <br />
              De fantasie van de kapoenen worden dit jaar aangewakkerd door
              Lise, Anke, Thomas, Amber en Liesa
              <br />
              <br />
              Bekijk de leidersvoorstelling van de kapoenen hieronder:
            </p>

            <div className="videosDiv">
              <Player>
                <source src="http://kramaai2.eu5.org/leidersvoorstelling2019-2020/Kapoenen.mp4" />
              </Player>
            </div>
            <br />
          </div>

          <div className="sideWidget">
            <SideWidget />
          </div>
          <SideSpace />
        </section>
      </div>
    );
  }
}

export default Kapoenen;
