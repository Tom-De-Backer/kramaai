import React, { Component } from "react";

import "../../styles/Takken.css";
import SideWidget from "../SideWidget";
import SideSpace from "../SideSpace";

import { Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";

class Welpen extends Component {
  render() {
    return (
      <div>
        <section className="info">
          <SideSpace />
          <div className="textDiv">
            <div className="titleTakken">Welpen</div>
            <div className="mailadresTakken">
              <a href="mailto:Welpen@kramaai.be">Welpen@kramaai.be</a>
            </div>
            <p className="paragraphTakken">
              Welpen zijn tussen 8 en 10 jaar, ze zijn dus guitige (bijna-)
              tieners die in het derde of vierde leerjaar zitten. Typisch voor
              de welpen is dat ze zelf dingen leren doen. Ze krijgen de ruimte
              en de kans om dingen uit te proberen en van elkaar te leren. De
              werking wordt ingekleed met verhalen en fantasie. Een welp groeit
              een millimeter per week, krijgt er op een jaar drie tanden bij en
              wordt elke week 5 gram zwaarder.
              <br />
              <br />
              <br />
              Door wie de welpen dit jaar in toom worden gehouden, kan je <a href="https://www.kramaai.be/#/leiding">hier</a> terugvinden.
              <br />
              <br />
              Bekijk de leidersvoorstelling van de welpen hieronder:
            </p>

            <div className="videosDiv">
              <Player>
                <source src="https://www.kramaai.be/images/videos/2020-2021/Welpen.mp4" />
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

export default Welpen;
