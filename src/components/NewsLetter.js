import React, { Component } from "react";

import "../styles/Faq.css";

import SideSpace from "./SideSpace";
import SideWidget from "./SideWidget";

// Deze pagina heeft dezelfde css als de FAQ component.

class NewsLetter extends Component {
  render() {
    return (
      <div className="faqDiv">
        <SideSpace />
        <section className="faqSection">
          <br />
          <div className="faqQuestion">
            Abonneer u via onderstaand formulier op de nieuwsbrief van Scouts
            Mollem:
          </div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdsNBs8DNN1oAodHsAqJC9DX7Xs6EJfGiYv9UFxCXRa4ruQnQ/viewform?embedded=true"
            width="640"
            height="1445"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="Newsletter form"
          >
            Laden…
          </iframe>
        </section>
        <SideWidget />
        <SideSpace />
      </div>
    );
  }
}

export default NewsLetter;
