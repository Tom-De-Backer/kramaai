import React, { Component } from "react";

import Tak from "./Takken.js";

class Welpen extends Component {
    render() {
        return (
            <Tak
                name="Welpen"
                explanation="Welpen zijn tussen 8 en 10 jaar, ze zijn dus guitige (bijna-)
              tieners die in het derde of vierde leerjaar zitten. Typisch voor
              de welpen is dat ze zelf dingen leren doen. Ze krijgen de ruimte
              en de kans om dingen uit te proberen en van elkaar te leren. De
              werking wordt ingekleed met verhalen en fantasie. Een welp groeit
              een millimeter per week, krijgt er op een jaar drie tanden bij en
              wordt elke week 5 gram zwaarder."
                leiding="Door wie de welpen dit jaar in toom worden gehouden, kan je %s terugvinden."
                video="https://www.kramaai.be/images/videos/2023-2024/Welpen.mp4"
            />
        );
    }
}

export default Welpen;
