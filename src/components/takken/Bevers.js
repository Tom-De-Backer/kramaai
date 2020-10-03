import React, { Component } from "react";

import "../../styles/Takken.css";
import SideWidget from "../SideWidget";
import SideSpace from "../SideSpace";

import { Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";

class Bevers extends Component {
  render() {
    return (
      <div>
        <section className="info">
          <SideSpace />
          <div className="textDiv">
            <div className="titleTakken">Bevers</div>
            <div className="mailadresTakken">
              <a href="mailto:Bevers@kramaai.be">Bevers@kramaai.be</a>
            </div>
            <p className="paragraphTakken">
              Na 2 jaar welp te zijn, wordt je een stoere bever! Wie tussen 10
              en 12 jaar is, dus in het 5e en 6e leerjaar zit, is een bever.
              Bever zijn betekent groeien, samenwerken, nog meer dingen
              zelfstandig leren doen, al meerdere knopen en sjorringen leren
              leggen. Spelenderwijs leren ze de werking van scouting kennen en
              raken ze vertrouwd met allerlei technieken. Stapsgewijs leren ze
              ook kennis maken met verantwoordelijkheid. Maar amuseren staat nog
              steeds op de eerste plaats!
              <br />
              <br />
              <br />
              De leiding van de bevers kan je <a href="https://www.kramaai.be/#/leiding">hier</a> terugvinden.
              <br />
              <br />
              Bekijk de leidersvoorstelling van de bevers hieronder:
            </p>

            <div className="videosDiv">
              <Player>
                <source src="https://www.kramaai.be/images/videos/2020-2021/Bevers.mp4" />
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

export default Bevers;
