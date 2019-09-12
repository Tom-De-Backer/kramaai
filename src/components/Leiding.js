import React, { Component } from "react";

import "../styles/Leiding.css";
import LeidingTable from "./LeidingTable";
import SideWidget from "./SideWidget";
import SideSpace from "./SideSpace";

class Leiding extends Component {
  render() {
    return (
      <section className="infoLeiding">
        <SideSpace />
        <div>
          <div className="title">Leiding 2019-2020</div>
          <p>
            De vetgedrukte namen zijn de <b>takverantwoordelijken</b>, aarzel
            niet om hen te contacteren. Je kan ook altijd een mailtje sturen
            naar de hele takleiding door naar tak@kramaai.be te mailen (bv.
            welpen@kramaai.be om de welpenleiding te contacteren).
          </p>
          <br />
          <LeidingTable />
        </div>
        <SideWidget />
        <SideSpace />
      </section>
    );
  }
}

export default Leiding;
