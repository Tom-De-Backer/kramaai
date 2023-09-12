import React, { Component } from "react";

import Tak from "./Takken.js";

class Kapoenen extends Component {
    render() {
        return (
            <Tak
                name="Kapoenen"
                explanation="Kapoenen zijn 6 tot 8 jaar. Ze ontdekken al spelend wat het is om
              scout of gids te zijn. Het leven van een kapoen is vol spel en
              fantasie. De leiding bedenkt spelen op maat van kapoenen en laat
              genoeg ruimte om op hun eigen impulsen in te gaan. Wat vinden ze
              leuk en wat kunnen ze al op die leeftijd?"
                leiding="Door wie de fantasie van de kapoenen dit jaar wordt aangewakkerd kan je %s terugvinden."
                video="https://www.kramaai.be/images/videos/2023-2024/Kapoenen.mp4"
            />
        );
    }
}

export default Kapoenen;
