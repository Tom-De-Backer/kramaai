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
          <p>Beste ouders</p>
          <p>
            Het ledenaantal van scouts Mollem blijft jaar na jaar groeien.
            Binnen de leiding vinden we dit natuurlijk een heel positieve trend,
            maar helaas botst de leiding hierdoor ook op zijn limieten. In de
            eerste plaats willen we nog steeds alle kinderen met volle aandacht
            de beste zondagen bezorgen. Daarom hebben we beslist om een
            ledenstop in te voeren, voor het tweede jaar op rij.
            <br />
            <br />
          </p>
          <h3>
            <u>Wat wil dit concreet zeggen?</u>
          </h3>

          <p>
            <strong>
              Alle leden die reeds lid zijn, zijn zeker dat ze hun
              scoutscarri&egrave;re kunnen verder zetten
            </strong>
            . De stop slaat enkel op nieuwe leden.
          </p>
          <p>
            Van ingeschreven&nbsp;leden&nbsp;verwachten we wel dat ze actief lid
            zijn doorheen het hele scoutsjaar (
            <strong>minstens 10 aanwezigheden</strong>), om mee te mogen op kamp
            en voorrang te krijgen om zich het jaar nadien in te schrijven. De
            aanwezigheden worden doorheen het jaar dan ook goed bijhouden.
          </p>
          <p>
            <br />
          </p>
          <h3>
            <u>Wanneer starten de inschrijvingen?</u>
          </h3>

          <p>
            <strong>Op 17 september 2019 tijdens de dia avond</strong>: voor
            kinderen woonachtig in Mollem of die reeds een{" "}
            <strong>broer of zus</strong> in onze Scouts hebben. Je moet wel
            aanwezig zijn, je kan niet andermans kind inschrijven.
          </p>
          <p>
            Kan je er niet bij zijn tijdens deze avond dan kan je nog
            inschrijven tussen 18 en 22 september door een mailtje te sturen
            naar{" "}
            <a href="mailto:groepsleiding@kramaai.be">
              <strong>groepsleiding@kramaai.be</strong>
            </a>
          </p>
          <p>
            <strong>Vanaf 22 september om 17u</strong> zijn de inschrijvingen
            open voor <strong>niet-Mollemnaren</strong> via www.kramaai.be
          </p>
          <br />
          <p></p>
          <h3>
            <u>Hoeveel nieuwe leden kunnen er nog worden ingeschreven?</u>
          </h3>
          <p>
            Scouts Mollem wil garant staan voor een kwaliteitsvolle werking, met
            aandacht voor elk kind. Hierdoor kunnen we spijtig genoeg maar de{" "}
            <strong>
              volgende aantallen leden in de verschillende takken inschrijven
            </strong>
            :
          </p>
          <p>
            &ndash; Kapoenen: 4
            <br />
            &ndash; Welpen: 7
            <br />
            &ndash; Bevers: 0<br />
            &ndash; Jong-Givers: 0<br />
            &ndash; Givers: 1
          </p>
          <br />
          <p></p>
          <h3>
            <u>Kan ik op een wachtlijst komen?</u>
          </h3>
          <p>
            Op advies van Scouts &amp; Gidsen Vlaanderen leggen we geen
            wachtlijst aan, vol is vol. Vanaf <strong>1 oktober </strong>worden
            geen nieuwe&nbsp;leden&nbsp;meer ingeschreven.
          </p>
          <p>Met dank voor jullie begrip.</p>
          <p>
            Een stevige linker
            <br />
            De Leiding
          </p>
          <br />
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
          )}
        </div>
        <SideWidget />
        <SideSpace />
      </div>
    );
  }
}

export default Inschrijven;
