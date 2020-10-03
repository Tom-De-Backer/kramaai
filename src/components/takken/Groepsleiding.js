import React, { Component } from "react";

import "../../styles/Takken.css";
import SideWidget from "../SideWidget";
import SideSpace from "../SideSpace";

import { Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";

class Groepsleiding extends Component {
  render() {
    return (
      <div>
        <section className="info">
          <SideSpace />
          <div className="textDiv">
            <div className="titleTakken">Groepsleiding</div>
            <div className="mailadresTakken">
              <a href="mailto:Groepsleiding@kramaai.be">
                Groepsleiding@kramaai.be
              </a>
            </div>
            <p className="paragraphTakken">
              Groepsleiding zijn is een nobele taak. Ze zijn als een fakkel voor
              de groep. Ze zijn de personen die de groep door het donker gidst.
              Ze lopen voorop en proberen hu medeleiding mee op sleeptouw te
              nemen. Als fakkel houden ze de groep samen met de nodige warmte en
              sfeer. Bij hen brandt het vuur van engagement. Als groepsleiding
              zijn ze voordurende op zoek naar het evenwicht tussen groepsleing,
              leiding en vriend zijn. Het is niet evident om aan het roer te
              staan van een ploeg leiding die ook jouw vrienden zijn.
              <br />
              <br />
              <br />
              Wie dit jaar groepsleiding is, kan je <a href="https://www.kramaai.be/#/leiding">hier</a> terugvinden.
              <br />
              <br />
              Bekijk de leidersvoorstelling van de groepsleiding hieronder:
            </p>

            <div className="videosDiv">
              <Player>
                <source src="https://www.kramaai.be/images/videos/2020-2021/Groepsleiding.mp4" />
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

export default Groepsleiding;
