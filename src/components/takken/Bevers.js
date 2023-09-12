import React, { Component } from "react";

import Tak from "./Takken.js";

class Bevers extends Component {
    render() {
        return (
            <Tak
                name="Bevers"
                explanation="Na 2 jaar welp te zijn, wordt je een stoere bever! Wie tussen 10 en
            12 jaar is, dus in het 5e en 6e leerjaar zit, is een bever. Bever
            zijn betekent groeien, samenwerken, nog meer dingen zelfstandig
            leren doen, al meerdere knopen en sjorringen leren leggen.
            Spelenderwijs leren ze de werking van scouting kennen en raken ze
            vertrouwd met allerlei technieken. Stapsgewijs leren ze ook kennis
            maken met verantwoordelijkheid. Maar amuseren staat nog steeds op de
            eerste plaats!"
                video="https://www.kramaai.be/images/videos/2023-2024/Bevers.mp4"
            />
        );
    }
}

export default Bevers;
