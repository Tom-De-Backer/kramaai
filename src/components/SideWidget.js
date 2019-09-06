import React from "react";

import "../styles/SideWidget.css";

import Bol from "../images/bollogo-web_rgb_600x181.png";
import Trooper from "../images/logo_trooper_small.gif";

const SideWidget = () => {
  return (
    <div>
      <div className="bol">
        <div className="bolText">
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
        <img src={Bol} alt="Bol.com affiliate" className="bolLogo" />
      </div>

      <div className="bol">
        <div className="bolText">
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
        <img src={Trooper} alt="Bol.com affiliate" className="bolLogo" />
      </div>
    </div>
  );
};

export default SideWidget;
