import React, { Component } from "react";

import SideSpace from "./SideSpace";
import SideWidget from "./SideWidget";

class Privacy extends Component {
    render() {
        return (
            <div className="backgroundDiv">
                <section className="info">
                    <SideSpace />
                    <div className="textdiv">
                        <center>
                            <h1 className="title">Privacy</h1>
                        </center>
                        <p>
                            Bent u geïnteresseerd in de privacyverklaring waarin wordt uitgelegd hoe wij persoonsgegevens
                            verzamelen en verwerken? Deze kan u{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="/downloads/Privacyverklaring-Scouts-en-Gidsen-Kramaai-Mollem.pdf"
                            >
                                hier
                            </a>{" "}
                            vinden.
                        </p>
                        <br />
                        <p>
                            Bent u geïnteresseerd in het verwerkingsregister? Deze kan u{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="/downloads/Verwerkingsregister-Scouts-en-Gidsen-Kramaai-Mollem.pdf"
                            >
                                hier
                            </a>{" "}
                            vinden.
                        </p>
                        <br />
                        <p>
                            Als u nog bijkomende vragen heeft, kan u steeds een mail sturen naar{" "}
                            <a href="mailto:groepsleiding@kramaai.be">groepsleiding@kramaai.be</a>
                        </p>
                    </div>
                    <SideWidget />
                    <SideSpace />
                </section>
            </div>
        );
    }
}

export default Privacy;
