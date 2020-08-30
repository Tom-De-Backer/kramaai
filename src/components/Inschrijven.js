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
          {/* <h3>
            Meer info over de inschrijvingen van scoutsjaar 2020 - 2021 volgt binnenkort. Houd deze pagina zeker in de gaten!
          </h3> */}

          <p>
            Beste ouders
            <br />
            <br />
            <br />
            Het ledenaantal van Scouts Kramaai Mollem blijft jaar na jaar groeien. Helaas botst de leiding ook op zijn limieten en willen we week na week elk kind een zo goed mogelijke zondagnamiddag bezorgen. Daarom hebben we beslist om een <b>ledenstop</b> in te voeren, voor het derde jaar op rij.
            <br />
            <br />
            <u>Wat wil dit concreet zeggen?</u>
            <br />
            <br />
            <b>Alle leden die reeds lid zijn, zijn zeker dat ze hun scoutscarrière kunnen verder zetten.</b> De stop slaat enkel op nieuwe leden. Alle leden zijn echter wel verplicht om zich in te schrijven, dit via een Google Forms dat op onze site komt op 6 september om 10u ’s ochtends, de dag na leidersvoorstelling. 
            <br />
            <br />
            Van ingeschreven leden verwachten we wel dat ze actief lid zijn doorheen het hele scoutsjaar <b>(minstens 10 aanwezigheden)</b>, om mee te mogen op kamp en voorrang te krijgen om zich het jaar nadien in te schrijven. De aanwezigheden worden doorheen het jaar dan ook goed bijhouden.
            <br />
            <br />
            <u>Wanneer starten de inschrijvingen voor nieuwe leden?</u>
            <br />
            <br />
            <b>Voor kinderen die in Mollem wonen of die reeds een broer of zus in onze Scouts hebben,</b> start de inschrijving op zondag 6 september om 10u ’s ochtends, de dag na de leidersvoorstelling. De inschrijving zal online gebeuren via onze website op deze pagina via Google Forms.
            <br />
            <br />
            <b>Voor niet-Mollemnaren </b>starten de inschrijvingen op zondag 13 september om 10u ’s ochtends, ook via een Google Forms op onze website (<a href="www.kramaai.be/#/inschrijven">Klik hier</a>).
            <br />
            <br />
            <u>Hoeveel nieuwe leden kunnen er nog worden ingeschreven?</u>
            <br />
            <br />
            Scouts Mollem wil garant staan voor een kwaliteitsvolle werking, met aandacht voor elk kind. Hierdoor kunnen we spijtig genoeg maar de <b>volgende aantallen leden in de verschillende takken inschrijven: </b> 
            <br />
            <br />
            <br />
            <center>
              <ul class="noBull">
                <li>Kapoenen (2013-2014): 40</li>
                <br />
                <li>Welpen (2011-2012): 40</li>
                <br />
                <li>Bevers (2009-2010): 40</li>
                <br />
                <li>Jong-Givers (2007-2008): 40</li>
                <br />
                <li>Givers (2004-2006): 40</li>
              </ul>
            </center>


            <br />
            <br />
            <u>Kan ik op een wachtlijst komen?</u>
            <br />
            <br />
            Op advies van Scouts & Gidsen Vlaanderen leggen we <b>geen wachtlijst</b> aan, vol is vol. Vanaf <b>1 oktober</b> worden geen nieuwe leden meer ingeschreven.
            <br />
            <br />
            Met dank voor jullie begrip.
            <br />
            Een stevige linker
            <br />
            De Leiding
          </p>

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
