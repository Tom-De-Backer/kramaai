import React, { Component } from "react";

import Tak from "./Takken.js";

class Groepsleiding extends Component {
    render() {
        return (
            <Tak
                name="Groupsleiding"
                explanation="Groepsleiding zijn is een nobele taak. Ze zijn als een fakkel voor
              de groep. Ze zijn de personen die de groep door het donker gidst.
              Ze lopen voorop en proberen hun medeleiding mee op sleeptouw te
              nemen. Als fakkel houden ze de groep samen met de nodige warmte en
              sfeer. Bij hen brandt het vuur van engagement. Als groepsleiding
              zijn ze voordurende op zoek naar het evenwicht tussen groepsleiding,
              leiding en vriend zijn. Het is niet evident om aan het roer te
              staan van een ploeg leiding die ook jouw vrienden zijn."
                leiding="Wie dit jaar groepsleiding is, kan je %s terugvinden."
            />
        );
    }
}

export default Groepsleiding;
