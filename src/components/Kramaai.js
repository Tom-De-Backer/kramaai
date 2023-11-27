import React, { Component } from "react";

import "../styles/Kramaai.css";
import SideSpace from "./SideSpace";
import SideWidget from "./SideWidget";

class Kramaai extends Component {
    kramaaiLink(link, months) {
        return (
            <div className="kramaaiLink">
                <a className="kramaaiA" href={link}>
                    {months}
                </a>
            </div>
        );
    }

    render() {
        return (
            <div className="kramaaiDiv">
                <SideSpace />
                <section>
                    <div className="kramaaiTitle">Kramaai</div>
                    <div className="kramaaiExplanation">
                        De kramaai is ons driemaandelijks ledentijdschrift waarin je alle komende activiteiten kan vinden
                        per tak. Hieronder vind je enkele kramaai’s van vroeger en nu.
                    </div>
                    <br />
                    <div>
                        <div className="titleTable">2023 - 2024</div>
                        <div>
                            {this.kramaaiLink(
                                "https://kramaaiblog.files.wordpress.com/2023/09/kramaai-sept-okt-nov.pdf",
                                "september-oktober-november"
                            )}
                            {this.kramaaiLink(
                                "https://kramaaiblog.files.wordpress.com/2023/11/kramaai-dec-jan-feb.pdf",
                                "december-january-february"
                            )}
                        </div>
                    </div>
                    {/* <h3>Nog even geduld voor de nieuwste Kramaai</h3>) */}
                    {/* titleTable is zelfde css als bij LeidingTable.css */}
                    {/* <div className="titleTable">2021 - 2022</div> */}
                </section>
                <SideWidget />
                <SideSpace />
            </div>
        );
    }
}

export default Kramaai;
