import React, { Component } from "react";

import "../../styles/Takken.css";
import SideWidget from "../SideWidget";
import SideSpace from "../SideSpace";

import { Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";

class Jins extends Component {
  render() {
    return (
      <div>
        <section className="info">
          <SideSpace />
          <div className="textDiv">
            <div className="titleTakken">Jins</div>
            <div className="mailadresTakken">
              <a href="mailto:Jins@kramaai.be">Jins@kramaai.be</a>
            </div>
            <p className="paragraphTakken">
              JIN staat voor ‘Jij en Ik een Noodzaak’ en zijn 17-18 jaar. Ze
              leven één intens samen in hun tak als een speciale overstap van
              lid naar leiding. JIN’s werken gekke activiteiten uit in hun eigen
              jonge stijl. Al doende leren ze samenwerken en
              verantwoordelijkheid opnemen. Hieruit groeit engagement voor de
              groep en voor de samenleving. Jins leven één of twee jaar intens
              samen en steken hun eigen jaar en kamp ineen. Al doende leren ze
              samenwerken en verantwoordelijkheden opnemen. JIN’s gaan elk jaar
              op buitenlands kamp.
              <br />
              <br />
              <br />
              De JIN’s worden dit jaar bijgestaan door Joris en Dries.
              <br />
              <br />
              Bekijk de leidersvoorstelling van de jins hieronder:
            </p>

            <div className="videosDiv">
              <Player>
                <source src="http://kramaai.be/images/videos/2019-2020/welpenLeiding2019-2020.mp4" />
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

export default Jins;
