import React, { Component } from "react";

import "../../styles/Takken.css";
import SideWidget from "../SideWidget";
import SideSpace from "../SideSpace";

import { Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";

class JongGivers extends Component {
  render() {
    return (
      <div>
        <section className="info">
          <SideSpace />
          <div className="textDiv">
            <div className="titleTakken">Jong-Givers</div>
            <div className="mailadresTakken">
              <a href="mailto:Jong-Givers@kramaai.be">Jong-Givers@kramaai.be</a>
            </div>
            <p className="paragraphTakken">
              Jonggivers zijn tussen 11 en 13 jaar oud. Jonggivers houden van
              avontuur en steken graag de handen uit de mouwen. Ze vinden het
              leuk om inspraak te hebben en gaan graag nieuwe uitdagingen aan:
              vlottentocht, koken op houtvuur, slapen in patrouilletenten.
              Jonggivers leren samenwerken, engagement tonen en zich inzetten
              voor anderen. Zo ontdekken ze stilaan wat scouting echt inhoudt en
              leggen hun belofte met trots af. Jonggivers zitten op de wip
              tussen kind en puber. Hun leefwereld verandert razendsnel en wordt
              plots veel complexer. Al die veranderingen zijn soms
              overweldigend.
              <br />
              <br />
              <br />
              De leiding van de Jong-Givers zijn Hanne, Seppe en Daan.
              <br />
              <br />
              Bekijk de leidersvoorstelling van de jong-givers hieronder:
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

export default JongGivers;
