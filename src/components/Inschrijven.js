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
                    <center>
                        {<h1>Inschrijvingen</h1>}
                        {/* <h1>
              Inschrijven voor scoutsjaar 2022 - 2023 is helaas niet meer mogelijk.
            </h1> */}
                    </center>
                    <br />

                    <p>
                        Vanaf nu kunnen ook nieuwe leden zich inschrijven, voor
                        de inschrijving van nieuwe leden hanteren we 2
                        richtlijnen. Broers & zussen van bestaande leden
                        genieten voorrang. Daarnaast krijgen ook inwoners van
                        Mollem voorrang. Het is voor ons belangrijk dat je
                        binnen je eigen dorp terecht kan bij de enige
                        jeugdbeweging die er is en dat met je hele gezin.
                        <br />
                        <br />
                        Per geboortejaar laten we ongeveer 20 leden toe. Hierbij
                        baseren we ons op de regel “First come, first served”.
                        Hoewel er bij sommige groepen enkele plaatsjes open
                        blijven, zijn andere groepen binnen enkele dagen volzet.
                        We kunnen jullie enkel aanraden niet te lang te wachten
                        met de inschrijving en hopen jullie zo volgend jaar ook
                        bij onze scouts te mogen verwelkomen!
                        <br />
                        <br />
                        Om je in te schrijven als nieuw lid kan je{" "}
                        <a href="https://forms.gle/fLaJXiWEEHx9Xq3C6">
                            hier
                        </a>{" "}
                        drukken, als je al een lid bent bij ons heb je al een
                        mail gekregen om je opnieuw in te schrijven en gebruik
                        je best die link.
                    </p>

                    {/* { <><p>
            Beste ouders
            <br />
            <br />
            <br />
            Het ledenaantal van Scouts Kramaai Mollem blijft jaar na jaar groeien.Helaas botst de leiding ook op zijn limieten en willen we week na week elk kind een zo goed mogelijke zondagnamiddag bezorgen.Daarom hebben we beslist om een <b>ledenstop</b> in te voeren, voor het derde jaar op rij.
            <br />
            <br />
            <u>Wat wil dit concreet zeggen?</u>
            <br />
            <br />
            <b>Alle leden die reeds lid zijn, zijn zeker dat ze hun scoutscarrière kunnen verder zetten.</b> De stop slaat enkel op nieuwe leden.Alle leden zijn echter wel verplicht om zich in te schrijven, dit via een mail die is doorgestuurd naar alle bestaande leden.
            <br />
            <br />
            Van ingeschreven leden verwachten we wel dat ze actief lid zijn doorheen het hele scoutsjaar <b>(minstens 10 aanwezigheden)</b>, om mee te mogen op kamp en voorrang te krijgen om zich het jaar nadien in te schrijven. De aanwezigheden worden doorheen het jaar dan ook goed bijhouden.
            <br />
            <br />
            <u>Wanneer starten de inschrijvingen voor nieuwe leden?</u>
            <br />
            <br />
            Voor kinderen die nog niet ingeschreven zijn starten de inschrijvingen op zondag 4 september om 13u, vanaf dan zal er onderaan deze pagina een inschrijvingsformulier te vinden zijn.
            <br/>
            <br />
            <u>Hoeveel nieuwe leden kunnen er nog worden ingeschreven?</u>
            <br />
            <br />
            Scouts Mollem wil garant staan voor een kwaliteitsvolle werking, met aandacht voor elk kind.Hierdoor kunnen we spijtig genoeg maar de <b>volgende aantallen leden in de verschillende takken inschrijven: </b>
            <br />
            <br />
            <br />
            <center>
              <ul className="noBull">
                <li>Kapoenen (2014-2015): 40</li>
                <br />
                <li>Welpen (2012-2013): 40</li>
                <br />
                <li>Bevers (2010-2011): 40</li>
                <br />
                <li>Jong-Givers (2008-2009): 40</li>
                <br />
                <li>Givers (2005-2007): 40</li>
              </ul>
            </center>


            <br />
            <br />
            <u>Wanneer krijgen nieuwe leden bevestiging van inschrijving?</u>
            <br />
            <br />
            Wij laten jullie ten laatste iets weten via mail voor onze eerste vergadering op zondag 19 september.
            <br />
            <br />
            <u>Kan ik op een wachtlijst komen?</u>
            <br />
            <br />
            Op advies van Scouts & Gidsen Vlaanderen leggen we <b>geen wachtlijst</b> aan, vol is vol.Vanaf <b>1 oktober</b> worden geen nieuwe leden meer ingeschreven.
            <br />
            <br />
            Met dank voor jullie begrip.
            <br />
            Een stevige linker
            <br />
            De Leiding
          </p><br /><br /><br /><br /></>  */}
                    {/*  Dit gedeelte is voor het tonen van de Google form die de ouders toelaat om hun kind(eren) in te schrijven.  */}
                    {/* 12 september 2021 om 10 uur  */}
                    {/* {new Date(2022, 8, 4, 13, 0, 0, 0) < new Date() && (
             
             <center>
               <h1>Nieuw lid: </h1>
               <iframe
               src="https://docs.google.com/forms/d/1X28Pm4WXehih85yDrK58E16r28hHNnSULq7ISxaP4qQ/viewform?embedded=true"
               width="90%"
               height="1630"
               frameBorder="0"
               marginHeight="0"
               marginWidth="0"
               title="inschrijven form"
             >
               Laden…
             </iframe>
             </center>
             
           )}  */}
                </div>
                <SideWidget />
                <SideSpace />
            </div>
        );
    }
}

export default Inschrijven;
