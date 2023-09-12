import React, { Component } from "react";

import Tak from "./Takken.js";

class Givers extends Component {
    render() {
        return (
            <Tak
                name="Givers"
                explanation="Giver staat voor ‘Gidsen – Verkenners’. Hierbij horen de 14 tot
              17-jarigen, dus weeral een tak hoger dan bij de jonggivers : meer
              verantwoordelijkheid, ruimte voor grotere projecten, met de groep
              zelf een snuifje avontuur realiseren, of uitgedaagd worden door
              elkaar, … Dit vertaalt zich in onder andere gezellige
              vrijdagavondjes, een toffe fuif, op weekend met de trein, een
              3-daagse met de fiets op kamp, leefweek, in-het-oog-springende
              constructies, enzoverder."
                leiding="Door wie de givers dit jaar begeleid worden, kan je %s terugvinden."
                video="https://www.kramaai.be/images/videos/2023-2024/Givers.mp4"
            />
        );
    }
}

export default Givers;
