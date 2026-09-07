import React, { Component } from "react";

import ReactGA from "react-ga";

import "../styles/Leiding.css";
import { LeidingTable, GroupsleidingTable } from "./LeidingTable";
import SideWidget from "./SideWidget";
import SideSpace from "./SideSpace";

class Leiding extends Component {
    componentDidMount() {
        let hash = this.props.location.hash.replace("#", "");
        if (hash) {
            let node = document.getElementById(hash);
            if (node) {
                node.scrollIntoView();
            }
        }
    }
    render() {
        ReactGA.pageview(window.location.pathname + window.location.search);
        return (
            <section className="infoLeiding">
                <SideSpace />
                <div className="leidingTable">
                    <center>
                        <div className="title">Leiding 2026-2027</div>
                    </center>
                    <GroupsleidingTable />
                    <br />
                    <br />
                    {(new Date() < new Date(2026, 8, 18, 21) && (
                        <div className="textdiv">
                            <p>
                                De leidingsploegen voor het scoutsjaar 2026-2027 zijn momenteel nog niet bekend. Deze
                                worden bekendgemaakt op de dia-avond op vrijdag 18 september om 19u op de gemeentelijke
                                basisschool in Mollem.
                            </p>
                        </div>
                    )) || (
                        <div>
                            <p>
                                De vetgedrukte namen zijn de <b>takverantwoordelijken</b>, aarzel niet om hen te
                                contacteren. Je kan ook altijd een mailtje sturen naar de hele takleiding door naar
                                [tak]@kramaai.be te mailen (bv. welpen@kramaai.be om de welpenleiding te contacteren).
                            </p>
                            <br />
                            <LeidingTable />
                        </div>
                    )}
                </div>
                <SideWidget />
                <SideSpace />
            </section>
        );
    }
}

export default Leiding;
