import React, { Component } from "react";

import ReactGA from "react-ga";

import "../styles/Leiding.css";
import LeidingTable from "./LeidingTable";
import SideWidget from "./SideWidget";
import SideSpace from "./SideSpace";

class Leiding extends Component {
  componentDidMount() {
    let hash = this.props.location.hash.replace("#", "");
    if (hash) {
      let node = document.getElementById(hash);
      if (node) {
        node.scrollIntoView();
      }
    }
  }
  render() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <section className="infoLeiding">
        <SideSpace />
        <div className="leidingTable">
          {new Date(2021, 8, 6, 22, 0, 0, 0) > new Date() && (
            <div className="title">Leiding 2020-2021</div>
          )}
          {new Date(2021, 8, 6, 22, 0, 0, 0) < new Date() && (
            <div className="title">Leiding 2021-2022</div>
          )}
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
