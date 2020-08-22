import React, { Component } from "react";

import ReactGA from "react-ga";

import "../styles/Inschrijven.css";
// import EnrollForm from "./enroll/EnrollForm";

import SideWidget from "./SideWidget";
import SideSpace from "./SideSpace";

class Inschrijven extends Component {
  render() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div className="inschrijven">
        <SideSpace />
        <div className="uitlegDiv">
          <h3>
            Meer info over de inschrijvingen van scoutsjaar 2020 - 2021 volgt binnenkort. Houd deze pagina zeker in de gaten!
          </h3>
          {/*         Dit gedeeelte is voor het tonen van de Google form die de ouders toelaat om hun kind(eren) in te schrijven.  
          {new Date(2019, 8, 22, 17, 0, 0, 0) < new Date() && (
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeTxcgXks937_JWOsCJvcQxcbhSuYi-3TnKSRupQW8NQg7J6A/viewform?embedded=true"
              width="640"
              height="1166"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="inschrijven form"
            >
              Laden…
            </iframe>
          )} */}
        </div>
        <SideWidget />
        <SideSpace />
      </div>
    );
  }
}

export default Inschrijven;
