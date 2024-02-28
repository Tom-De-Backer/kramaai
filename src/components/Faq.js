import React, { Component } from "react";

import "../styles/Faq.css";

import SideSpace from "./SideSpace";
import SideWidget from "./SideWidget";

let kampStart = 3;

class Faq extends Component {
  render() {
    return (
      <div className="faqDiv">
        <SideSpace />
        <section className="faqSection">
          <div className="faqTitle">FAQ</div>
          <div className="faqAnswer">
            Indien u een vraag heeft die hieronder niet beantwoord wordt, stuur
            dan een mailtje met uw vraag naar:{" "}
            <a href="mailto:groepsleiding@kramaai.be">
              groepsleiding@kramaai.be
            </a>
          </div>
          <br />
          <div className="faqQuestion">Waar kan ik Scouts Mollem vinden? </div>
          <div className="faqAnswer">
            Ons adres is: Kasteelstraat 47a, 1730 Mollem. Ons gebouw (met houten
            latjes) bevindt zich naast de gemeentelijke basisschool in Mollem.
            Je kan er niet naast kijken.
          </div>
          <div className="faqQuestion">
            Wat is het rekeningnummer van Scouts Mollem?
          </div>
          <div className="faqAnswer">
            Overschrijvingen naar de scouts gericht, kunnen gebeuren op volgend
            rekeningnummer: BE78 3101 1300 5086 .
          </div>
          <div className="faqQuestion">
            Kan ik nog aansluiten bij de scouts?
          </div>
          <div className="faqAnswer">
            Door de aanhoudende toestroom van leden naar onze scouts, zijn wij
            verplicht om een ledenstop te houden. Meer informatie vinden jullie
            in de menubalk bij <a href="/#/inschrijven">inschrijven</a>. Hierna
            krijg je een mailtje met verdere info.
          </div>
          <div className="faqQuestion">
            Ik zou graag bij de scouts aansluiten, maar het werkjaar is al
            begonnen. Gaat dit nog?
          </div>
          <div className="faqAnswer">
            Aangezien we een ledenstop hebben, gaan de inschrijvingen vanaf
            oktober toe. Spijtig genoeg kunnen wij vanaf dan niemand meer
            inschrijven. Volgend jaar ben je steeds welkom indien we nog
            plaatsen over hebben.
          </div>
          <div className="faqQuestion">Wanneer valt het kamp dit jaar?</div>
          <div className="faqAnswer">
            Welpen, Bevers en Jong-Givers trekken van {kampStart} augustus tot {kampStart + 10} augustus op kamp.
			Kapoenen gaan van {kampStart} tot {kampStart + 4} augustus.
			Givers vertrekken voor 11 dagen op kamp en vertrekken al {kampStart - 1} augustus.
			De Jins vertrekken traditiegetrouw naar het buitenland.
			Na hun buitenlands avontuur is het de gewoonte dat ze samen met de andere takken het gewone kamp in de Ardennen afsluiten.
          </div>
          <div className="faqQuestion">Waar kan ik Scouts Mollem vinden? </div>
          <div className="faqAnswer">
            Ons adres is: Kasteelstraat 47a, 1730 Mollem. Ons gebouw (met houten
            latjes) bevindt zich naast de gemeentelijke basisschool in Mollem.
            Je kan er niet naast kijken.
          </div>
          <div className="faqQuestion">Waar kan ik Scouts Mollem volgen?</div>
          <div className="faqAnswer">
			Wij posten regelmatig leuke foto's van onze activiteiten met de leden op <a href="https://www.instagram.com/scoutskramaaimollem/" rel="noreferrer" target="_blank">Instagram</a>. Je kan ons ook volgen op <a href="https://www.facebook.com/groups/113217998689162/" rel="noreferrer" target="_blank">Facebook</a> voor meer info over wat er gebeurt in onze Scouts.faq
          </div>
          <div className="faqQuestion">Kampinschrijving?</div>
          <div className="faqAnswer">
            De leiding vindt het belangrijk het hele kampgebeuren persoonlijk
            mede te delen aan ouders en leden van Kramaai Mollem. Daarom trekken
            zij de eerste twee weken van deur tot deur om iedereen voor het kamp
            in te schrijven. Geen nood dus indien je op 7 juli nog steeds niet
            ingeschreven bent.
          </div>
          <div className="faqQuestion">Ledentijdschrift ‘De Kramaai’</div>
          <div className="faqAnswer">
            De Kramaai is het ledenmagazine van Scouts en Gidsen Kramaai Mollem.
            Hierin staat vermeld wat er elke vergadering staat te gebeuren. Ook
            leuke weetjes, sprookjes, wedstrijden en dergelijke zijn er in terug
            te vinden. Heb jij je Kramaai niet gekregen? Geef je takleiding een
            seintje, dan is er vast en zeker een vergissing gebeurd. U kan de
            Kramaai ook steeds downloaden onder de rubriek{" "}
            <a href="/#/kramaai">Kramaai</a>.
          </div>
          <div className="faqQuestion">
            Vanaf welke leeftijd ben je Scoutsrechtig?
          </div>
          <div className="faqAnswer">
            Elke kind dat 6 jaar wordt tijdens het lopende werkjaar is bij ons
            welkom, vanaf het eerste leerjaar dus. Op jongere leeftijd kunnen
            wij je spruit jammer genoeg niet verzekeren. Nog een jaartje wachten
            maar!
          </div>
          <div className="faqQuestion">Fiscale voordeel</div>
          <div className="faqAnswer">
            De jeugdactiviteiten van erkende jeugdbewegingen zijn jaarlijks
            fiscaal aftrekbaar, wel enkel voor kinderen onder de 12 jaar. Indien
            u hiervan wenst gebruik te maken, kan u bij ons een fiscaal attest
            verkrijgen om toe te voegen aan uw belastingsaangifte. Vraag dit
            gewoon eens na de vergadering. Ook kan u bij uw ziektefonds
            voordelen in verband met het lidgeld en voordelen in verband met het
            kamp verkrijgen. De bedragen verschillen van ziektefonds tot
            ziektefonds, dus voor de specifieke bedragen en de precieze details
            om dit voordeel te verkrijgen neemt u best contact op met{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.fair-repair.be"
              className="faqALink"
            >
              uw
            </a>{" "}
            ziektefonds.
          </div>
          <div className="faqQuestion">Verminderd lidgeld</div>
          <div className="faqAnswer">
			Als voor u moeilijk is om het lidgeld van de scouts te betalen dan kunt u verminderd lidgeld aanvragen. Indien u verminderd lidgeld hebt moet u slechts 1/3de van het lidgeld en bepaalds activiteiten zoals het weekend of het kamp betalen. Als u niet zeker weet of u hiervoor in aanmerking komt of u wilt gewoon meer info, laat het ons dan zeker weten.
		  </div>
          <div className="faqQuestion">
            Zoekt u de privacyverklaring van Scouts Mollem?
          </div>
          <div className="faqAnswer">
            Bent u geïnteresseerd in de privacyverklaring waarin wordt uitgelegd
            hoe wij persoonsgegevens verzamelen en verwerken? Deze kan u{" "}
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href="/downloads/privacyverklaring-02-02-2021.pdf"
              >
                hier
              </a>{" "}
            vinden.
            <br />
            <br />
            Als u nog bijkomende vragen heeft, kan u steeds een mail sturen naar{" "}
            <a href="mailto:groepsleiding@kramaai.be">
              groepsleiding@kramaai.be
            </a>{" "}
          </div>
        </section>
        <SideWidget />
        <SideSpace />
      </div>
    );
  }
}

export default Faq;
