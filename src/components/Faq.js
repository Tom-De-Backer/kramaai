import React, { Component } from "react";

import "../styles/Faq.css";

import SideSpace from "./SideSpace";
import SideWidget from "./SideWidget";

let kampStart = 4;

class Faq extends Component {
    render() {
        return (
            <div className="faqDiv">
                <SideSpace />
                <section className="faqSection">
                    <div className="faqTitle">FAQ</div>
                    <div className="faqAnswer">
                        Indien u een vraag heeft die hieronder niet beantwoord wordt, stuur dan een mailtje met uw vraag
                        naar: <a href="mailto:groepsleiding@kramaai.be">groepsleiding@kramaai.be</a>
                    </div>
                    <br />
                    <div className="faqQuestion">Waar kan ik Scouts Mollem vinden? </div>
                    <div className="faqAnswer">
                        Ons adres is: Kasteelstraat 47a, 1730 Mollem. Ons gebouw (met houten latjes) bevindt zich naast de
                        gemeentelijke basisschool in Mollem. Je kan er niet naast kijken.
                    </div>
                    <div className="faqQuestion">Wat is het rekeningnummer van Scouts Mollem?</div>
                    <div className="faqAnswer">
                        Overschrijvingen naar Scouts & Gidsen Kramaai Mollem gericht, kunnen gebeuren op volgend
                        rekeningnummer: BE45 7340 7340 7989.
                    </div>
                    <div className="faqQuestion">Kan ik nog aansluiten bij de scouts?</div>
                    <div className="faqAnswer">
                        Door de aanhoudende toestroom van leden naar onze scouts, zijn wij genoodzaakt om een ledenstop te
                        hanteren. Meer informatie vinden jullie in de menubalk bij 
                        <a href="/#/inschrijven">inschrijven</a>.
                    </div>
                    <div className="faqQuestion">
                        Ik zou graag bij de scouts aansluiten, maar het werkjaar is al begonnen. Gaat dit nog?
                    </div>
                    <div className="faqAnswer">
                        De inschrijvingen sluiten rond midden september. Spijtig genoeg kunnen wij vanaf dan niemand meer
                        verzekeren en bijgevolg ook niet inschrijven. Volgend jaar ben je steeds welkom als we nog
                        plaatsjes over hebben.
                    </div>
                    <div className="faqQuestion">Wanneer valt het kamp dit jaar?</div>
                    <div className="faqAnswer">
                        Welpen, Bevers en Jong-Givers trekken van {kampStart} augustus tot {kampStart + 10} augustus op
                        kamp. Kapoenen gaan van {kampStart} tot {kampStart + 4} augustus. Givers gaan voor 12 dagen op kamp
                        en vertrekken al op {kampStart - 1} augustus. De Jins reizen traditiegetrouw naar het buitenland.
                        Na hun buitenlands avontuur, is het de gewoonte dat ze samen met de andere takken het gewone kamp
                        in de Ardennen afsluiten.
                    </div>
                    <div className="faqQuestion">Waar kan ik Scouts Mollem volgen?</div>
                    <div className="faqAnswer">
                        Wij posten regelmatig leuke foto's van onze activiteiten met de leden op{" "}
                        <a href="https://www.instagram.com/scoutskramaaimollem/" rel="noreferrer" target="_blank">
                            Instagram
                        </a>
                        . Je kan ons ook volgen op{" "}
                        <a href="https://www.facebook.com/groups/113217998689162/" rel="noreferrer" target="_blank">
                            Facebook
                        </a>{" "}
                        voor meer info over wat er gebeurt in onze Scouts.
                    </div>
                    <div className="faqQuestion">Kampinschrijving?</div>
                    <div className="faqAnswer">
                        De leiding vindt het belangrijk het hele kampgebeuren persoonlijk mede te delen aan ouders en leden
                        van Kramaai Mollem. Daarom trekken ze eind juni, begin juli van deur tot deur om iedereen voor het
                        scoutskamp in te schrijven.
                    </div>
                    <div className="faqQuestion">Ledentijdschrift ‘De Kramaai’</div>
                    <div className="faqAnswer">
                        De Kramaai is het ledenmagazine van Scouts en Gidsen Kramaai Mollem. Hierin wordt vermeld wat er
                        elke vergadering staat te gebeuren. Ook leuke weetjes, sprookjes, wedstrijden en dergelijke zijn er
                        in terug te vinden. Heb jij de Kramaai niet gekregen via de mail? Geef je takleiding een seintje,
                        dan is er vast en zeker een vergissing gebeurd. U kan de Kramaai ook steeds downloaden onder de
                        rubriek <a href="/#/kramaai">Kramaai</a>.
                    </div>
                    <div className="faqQuestion">Vanaf welke leeftijd ben je Scoutsrechtig?</div>
                    <div className="faqAnswer">
                        Elke kind dat 6 jaar wordt tijdens het lopende werkjaar is bij ons welkom, vanaf het eerste
                        leerjaar dus. Op jongere leeftijd kunnen wij je spruit jammer genoeg niet verzekeren. Nog een
                        jaartje wachten maar!
                    </div>
                    <div className="faqQuestion">Fiscale voordeel</div>
                    <div className="faqAnswer">
                        De jeugdactiviteiten van erkende jeugdbewegingen zijn jaarlijks fiscaal aftrekbaar, wel enkel voor
                        kinderen onder de 12 jaar. Indien u hiervan wenst gebruik te maken, kan u bij de takleiding een
                        fiscaal attest verkrijgen om toe te voegen aan uw belastingsaangifte. Vraag dit gewoon eens na de
                        vergadering. Ook kan u bij uw ziektefonds voordelen in verband met het lidgeld en voordelen in
                        verband met het kamp verkrijgen. De bedragen verschillen van ziektefonds tot ziektefonds, dus voor
                        de specifieke bedragen en de precieze details neemt u best contact op met uw ziektefonds.
                    </div>
                    <div className="faqQuestion">Verminderd lidgeld</div>
                    <div className="faqAnswer">
                        Als het voor u moeilijk is om het lidgeld van de scouts te betalen, dan kunt u verminderd lidgeld
                        aanvragen. Indien u beroep doet op verminderd lidgeld, dient u slechts 1/3de van het lidgeld en
                        bepaalde activiteiten zoals het weekend of het kamp te betalen. Als u niet zeker weet of u hiervoor
                        in aanmerking komt of u meer informatie wenst, laat het ons dan zeker weten.
                    </div>
                </section>
                <SideWidget />
                <SideSpace />
            </div>
        );
    }
}

export default Faq;
