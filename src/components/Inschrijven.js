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
                        <h1>Inschrijvingen Scoutsjaar 2025 - 2026</h1>
                        {/* <h1>Inschrijven voor scoutsjaar 2024 - 2025 is helaas niet meer mogelijk.</h1>*/}
                    </center>
                    <p>
                        Wat fijn dat je interesse toont in onze jeugdbeweging! Hoewel Scouts Mollem graag iedereen zou
                        verwelkomen, stuiten ook wij op onze limieten. Daarom zijn we sinds enkele jaren genoodzaakt om een
                        ledenstop in te stellen. Doorheen het jaar is het spijtig genoeg niet mogelijk om nog aan te
                        sluiten.
                        <br />
                        <br />
                        De inschrijvingen voor het volgende scoutsjaar gaan steeds door begin september. Dan stellen wij
                        onze jeugdwerking en de nieuwe leidersploegen voor op de dia-avond. Kom op vrijdag 12 september
                        2025 om 19u dus zeker naar de speelplaats van de lagere school (Kasteelstraat 49, Asse). Het is het
                        perfecte moment om kennis te maken met Scouts Mollem! Met een hapje en een drankje beantwoordt onze
                        (Groeps)leiding al jouw vragen. Sluit je gerust ook aan bij de Facebookgroep “Scouts en Gidsen
                        Kramaai Mollem” of houd onze website in de gaten voor verdere informatie over deze dia-avond.
                        <br />
                        <br />
                        Bestaande leden krijgen al op zaterdag 30 augustus een link toegestuurd om zich opnieuw in te
                        schrijven. Op zaterdag 13 september, een dag na de dia-avond, komt er dan om 12u een link op onze
                        website (www.kramaai.be) waarmee nieuwe leden (hieronder vallen ook broers en zussen van bestaande
                        leden) zich kunnen inschrijven.
                        <br />
                        <br />
                        Bij de inschrijving van nieuwe leden hanteren we 2 richtlijnen. Broers & zussen van bestaande leden
                        genieten voorrang. Daarnaast krijgen inwoners van Mollem ook voorrang. Het is voor ons belangrijk
                        dat je binnen je eigen dorp terecht kan bij de enige jeugdbeweging die er aanwezig is en dat met je
                        hele gezin.
                        <br />
                        <br />
                        Per geboortejaar laten we ongeveer 20 leden toe. Hierbij baseren we ons op de regel “First come,
                        first served”. Hoewel er bij sommige groepen enkele plaatsjes open blijven, zijn andere groepen
                        binnen enkele dagen volzet. We kunnen jullie enkel aanraden niet te lang te wachten met de
                        inschrijving en hopen jullie zo volgend jaar ook bij onze scouts te mogen verwelkomen! In de loop
                        van september krijgen jullie dan een mailtje omtrent de inschrijving.
                        <br />
                        <br />
                        Als jouw zoon/dochter succesvol is ingeschreven als nieuw lid, kan deze de eerste drie
                        scoutsvergaderingen gebruiken als proefvergaderingen. Zo kan hij/zij kennis maken met onze scouts.
                        Pas daarna moet je inschrijvingsgeld betalen.
                        <br />
                        <br />
                        De eerste vergadering gaat traditiegetrouw door op autoloze zondag. Die valt dit jaar op zondag 21
                        september en zal plaatsvinden op de Asphaltcosite. Die vergadering wordt voor het eerst
                        georganiseerd door de Jeugddienst van Asse in samenwerking met de andere Assesse jeugdbewegingen.
                        De Groepsleiding zal hier later nog over communiceren.
                        <br />
                        <br />
                        Wij hebben alvast heel veel zin in het nieuwe scoutsjaar! Hopelijk tot snel!
                    </p>
                </div>
                <SideWidget />
                <SideSpace />
            </div>
        );
    }
}

export default Inschrijven;
