import React, { Component } from "react";

import Tak from "./Takken.js";

class JongGivers extends Component {
    render() {
        return (
            <Tak
                name="Jong-givers"
                explanation=" Jonggivers zijn tussen 11 en 13 jaar oud. Jonggivers houden van
              avontuur en steken graag de handen uit de mouwen. Ze vinden het
              leuk om inspraak te hebben en gaan graag nieuwe uitdagingen aan:
              vlottentocht, koken op houtvuur, slapen in patrouilletenten.
              Jonggivers leren samenwerken, engagement tonen en zich inzetten
              voor anderen. Zo ontdekken ze stilaan wat scouting echt inhoudt en
              leggen hun belofte met trots af. Jonggivers zitten op de wip
              tussen kind en puber. Hun leefwereld verandert razendsnel en wordt
              plots veel complexer. Al die veranderingen zijn soms
              overweldigend."
                video="https://www.kramaai.be/images/videos/2023-2024/Jong-Givers.mp4"
            />
        );
    }
}

export default JongGivers;
