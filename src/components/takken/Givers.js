import React, { Component } from "react";

import "../../styles/Takken.css";
import SideWidget from "../SideWidget";
import SideSpace from "../SideSpace";

import { Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";

class Givers extends Component {
  render() {
    return (
      <div>
        <section className="info">
          <SideSpace />
          <div className="textDiv">
            <div className="titleTakken">Givers</div>
            <div className="mailadresTakken">
              <a href="mailto:Givers@kramaai.be">Givers@kramaai.be</a>
            </div>
            <p className="paragraphTakken">
              Giver staat voor ‘Gidsen – Verkenners’. Hierbij horen de 14 tot
              17-jarigen, dus weeral een tak hoger dan bij de jonggivers : meer
              verantwoordelijkheid, ruimte voor grotere projecten, met de groep
              zelf een snuifje avontuur realiseren, of uitgedaagd worden door
              elkaar, … Dit vertaalt zich in onder andere gezellige
              vrijdagavondjes, een toffe fuif, op weekend met de trein, een
              3-daagse met de fiets op kamp, leefweek, in-het-oog-springende
              constructies, enzoverder.
              <br />
              <br />
              <br />
              De givers worden dit jaar begeleid door Hannah, Viktor en Lennart.
              <br />
              <br />
              Bekijk de leidersvoorstelling van de givers hieronder:
            </p>

            <div className="videosDiv">
              <Player>
                <source src="http://kramaai.eu5.org/leidersvoorstelling2019-2020/Givers.mp4" />
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

export default Givers;
