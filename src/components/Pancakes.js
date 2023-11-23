import React, { Component } from "react";

import "../styles/Pancakes.css";
import SideWidget from "./SideWidget";

class Pancakes extends Component {
    render() {
        return (
            <div class="contents">
                <iframe
                    class="form"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfSzb3afwBkWKepjAXy901XMQ_y3XvD6dNotcO-r3GL-U3lBQ/viewform"
                    title="Pannenkoekenverkoop"
                >
                    Laden…
                </iframe>
                <SideWidget />
            </div>
        );
    }
}

export default Pancakes;
