import React from "react";

import "../../styles/Takken.css";
import SideWidget from "../SideWidget";

import { Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";

const Tak = (props) => {
    let lowerName = props.name.toLowerCase().replace("-", "");
    let hasVideo = false;
    if (props.video) hasVideo = true;
    return (
        <div>
            <section className="info">
                <div className="textDiv">
                    <div className="titleTakken">{props.name}</div>
                    <div className="mailadresTakken">
                        <a href={"mailto:" + lowerName + "@kramaai.be"}>
                            {lowerName}@kramaai.be
                        </a>
                    </div>
                    <p className="paragraphTakken">
                        {props.explanation}
                        <br />
                        <br />
                        <br />
                        {props.leiding ? (
                            <div>
                                {props.leiding.split("%s")[0]}{" "}
                                <a
                                    href={
                                        "https://www.kramaai.be/#/leiding#" +
                                        lowerName
                                    }
                                >
                                    hier
                                </a>
                                {props.leiding.split("%s")[1]}
                            </div>
                        ) : (
                            <div>
                                De leiding van de {props.name} kan je{" "}
                                <a
                                    href={
                                        "https://www.kramaai.be/#/leiding#" +
                                        lowerName
                                    }
                                >
                                    hier
                                </a>{" "}
                                terugvinden.
                            </div>
                        )}
                        {hasVideo && (
                            <p>
                                <br />
                                <br />
                                Bekijk de leidersvoorstelling van de bevers
                                hieronder:
                            </p>
                        )}
                    </p>

                    {hasVideo && (
                        <div className="videosDiv">
                            <Player>
                                <source src={props.video} />
                            </Player>
                        </div>
                    )}
                    <br />
                </div>

                <SideWidget />
            </section>
        </div>
    );
};

export default Tak;
