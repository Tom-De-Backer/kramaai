import React from "react";

import "../styles/SideWidget.css";

import Bol from "../images/bollogo-web_rgb_600x181.png";
import Trooper from "../images/logo_trooper_small.gif";

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
            href="https://www.bol.com/nl/index.html?Referrer=ADVNLPPcefc5f00cdbf929700828d3415160039069&utm_source=39069&utm_medium=Affiliates&utm_campaign=CPS&utm_content=btn"
          >
            link
          </a>{" "}
          en steun zo Scouts Kramaai Mollem
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.bol.com/nl/index.html?Referrer=ADVNLPPcefc5f00cdbf929700828d3415160039069&utm_source=39069&utm_medium=Affiliates&utm_campaign=CPS&utm_content=btn"
        >
          <img src={Bol} alt="Bol.com affiliate" className="widgetLogo" />
        </a>
      </div>

      <div className="widget">
        <div className="widgetText">
          Maak u online bestellingen via deze{" "}
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
          <img src={Trooper} alt="Trooper affiliate" className="widgetLogo" />
        </a>
      </div>

      <div className="widget">
        <div className="widgetText">
          Kom{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://scoutsbouwt.genn.be/"
          >
            hier
          </a>{" "}
          wat meer te weten over de nieuwe lokalen
        </div>
      </div>
    </div>
  );
};

export default SideWidget;
