import React, { Component } from "react";

import "../styles/Leiding.css";
import LeidingTable from "./LeidingTable";

class Leiding extends Component {
  render() {
    return (
      <section className="infoLeiding">
        <div className="title">Leiding 2019-2020</div>
        <p>
          De vetgedrukte namen zijn de <b>takverantwoordelijken</b>, aarzel niet
          om hen te contacteren. Je kan ook altijd een mailtje sturen naar de
          hele takleiding door naar tak@kramaai.be te mailen (bv.
          welpen@kramaai.be om de welpenleiding te contacteren).
        </p>
        <br />
        <LeidingTable />
      </section>
    );
  }
}

export default Leiding;
