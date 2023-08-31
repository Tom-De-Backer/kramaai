import "../styles/SideWidget.css";

import React from "react";

import Bol from "../images/bollogo-web_rgb_600x181.png";
import Trooper from "../images/logo_trooper_small.gif";
import Scoutnet from "../images/scoutnet_green.jpg";

import WidgetSlideshow from "./slideShow/WidgetSlideshow";

const SideWidget = () => {
    return (
        <div className="containerWidgets">
            {/* enkel sponsors tonen op Home page */}
            {(window.location.href === "http://kramaai.be" ||
                window.location.href === "http://kramaai.be/" ||
                window.location.href === "http://localhost:3000/") && (
                <div className="widgetSponsor">
                    <div className="slideShow">
                        <WidgetSlideshow />
                    </div>
                </div>
            )}
            <div className="widget">
                <div className="widgetText">
                    Bestel bij bol.com via deze{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://partner.bol.com/click/click?p=2&t=url&s=39069&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fbe%2F&name=de%20winkel%20van%20ons%20allemaal"
                    >
                        link
                    </a>{" "}
                    en steun zo Scouts Kramaai Mollem
                </div>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://partner.bol.com/click/click?p=2&t=url&s=39069&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fbe%2F&name=de%20winkel%20van%20ons%20allemaal"
                >
                    <img
                        src={Bol}
                        alt="Bol.com affiliate"
                        className="widgetLogo"
                    />
                </a>
            </div>

            <div className="widget">
                <div className="widgetText">
                    Maak uw online bestellingen via deze{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.trooper.be/kramaai"
                    >
                        link
                    </a>{" "}
                    van Trooper en steun zo Scouts Kramaai Mollem
                </div>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.trooper.be/kramaai"
                >
                    <img
                        src={Trooper}
                        alt="Trooper affiliate"
                        className="widgetLogo"
                    />
                </a>
            </div>

            <div className="widget">
                <div className="widgetText">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://scoutnet.be"
                    >
                        Hosting
                    </a>{" "}
                    door:
                </div>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://scoutnet.be"
                >
                    <img
                        src={Scoutnet}
                        alt="Scoutnet logo"
                        className="widgetLogo"
                    />
                </a>
            </div>
        </div>
    );
};

export default SideWidget;
