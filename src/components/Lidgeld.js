import React, { Component } from "react";

import ReactGA from "react-ga";

import SideWidget from "./SideWidget";
import SideSpace from "./SideSpace";

class Lidgeld extends Component {
    render() {
        ReactGA.pageview(window.location.pathname + window.location.search);
        return (
            <div className="inschrijven">
                <SideSpace />
                <div className="uitlegDiv">
                    <center>
                        <h1>Uitleg lidgeld scoutsjaar 2026-2027</h1>
                    </center>
                    <p>
                        Scouts en Gidsen Vlaanderen vraagt de jeugdbewegingen om zoveel mogelijk kosten te verwerken in het
                        lidgeld. We geven daarom graag een klein woordje uitleg…
                        <br />
                        <br />
                        Voor Kapoenen, Welpen, Bevers en Jong Givers bedraagt het lidgeld €75.
                        <br />
                        <br />
                        Voor Givers en Jins bedraagt het lidgeld €90.
                        <br />
                        <br />
                        We vragen om dit bedrag zo snel mogelijk over te schrijven op het rekeningnummer BE45 7340 7340
                        7989 met de vermelding “Lidgeld voornaam naam”.
                        <br />
                        <br />
                        Wat gebeurt er dit jaar precies met dat lidgeld?
                        <br />
                        <br />
                        <ul>
                            <li style={{ marginLeft: "20px" }}>
                                €46,10 gaat integraal naar Scouts en Gidsen Vlaanderen. Daarmee ben je verzekerd tijdens
                                elke scoutsvergadering, op weekend en op kamp.
                            </li>
                            <li style={{ marginLeft: "20px" }}>
                                €15 (bij Kapoenen, Welpen, Bevers & Jong Givers) & €30 (bij Givers & Jins) wordt gestort
                                naar de takkas van jouw kind voor de vieruurtjes en de kookvergadering.
                            </li>
                            <li style={{ marginLeft: "20px" }}>
                                €7,90 gaat naar de schaats- en zwemactiviteit. Op deze manier verlagen we de kost per lid
                                (anders is dat €7,50 voor schaatsen en €4 voor zwemmen) en voorkomen we dat verschillende
                                leden vergeten te betalen voor deze activiteiten.
                            </li>
                            <li style={{ marginLeft: "20px" }}>
                                €6 wordt gebruikt voor kleine kosten zoals EHBO (plakkers, zonnecrème, ontsmetting,...),
                                jaartekens & meer.
                            </li>
                        </ul>
                        <br />
                        We kiezen er bewust voor om de kosten voor het scoutsweekend en het scoutskamp niet op te nemen in
                        dit bedrag. We kunnen jullie wel al meegeven dat de richtprijs voor een weekend €35 bedraagt bij
                        Kapoenen, Welpen, Bevers en Jong Givers. Voor Givers en Jins bedraagt de richtprijs €40 vanwege de
                        treinkosten. Voor het scoutskamp volgt de info over het kampgeld steeds in de kampbrief.
                        <br />
                        <br />
                        <h2>Verminderd lidgeld</h2>
                        Het verminderd lidgeld bedraagt dit jaar €25 voor Kapoenen, Welpen, Bevers en Jong Givers. Voor
                        Givers en Jins bedraagt dit €30.
                        <br />
                        <br />
                        Omdat de scouts toegankelijk hoort te zijn voor iedereen, informeren we jullie graag over Scouting
                        op Maat. Dit fonds van Scouts en Gidsen Vlaanderen komt financieel tegemoet bij lidgeld, kampen,
                        weekends, uniformen en ander scoutsmateriaal. Voor mensen die hierop beroep doen, betaalt Scouts
                        Mollem ⅓ van de kosten, wordt ⅓ betaald door Scouts en Gidsen Vlaanderen en ⅓ door de ouders zelf.
                        Wens je hierover meer uitleg te krijgen? Neem dan gerust contact op met de Groepsleiding.
                        <br />
                        <br />
                        <h2>UiTPAS</h2>
                        Onze scouts is aangesloten bij het UiTPAS-systeem van Asse. Iedereen kan deze pas aanvragen en
                        hiermee punten sparen, die ingeruild kunnen worden voor toffe gadgets of activiteiten in Asse zoals
                        een gratis zwembeurt. UiTPAS-leden die in aanmerking komen voor een kansentarief kunnen
                        gebruikmaken van een prijsverlaging voor zowel ons lidgeld als ons kamp. Meer info kunnen jullie
                        vinden op deze <a href="https://www.huisvanhetkindasse.be/uitpas-asse/#kansentarief">website</a>.
                    </p>
                </div>
                <SideWidget />
                <SideSpace />
            </div>
        );
    }
}

export default Lidgeld;
