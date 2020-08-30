import React, { Component } from "react";

import ReactGA from "react-ga";

import SlideEffect from "../components/slideShow/slideEffect";
import CalendarItem from "./CalendarItem";
import NewsItem from "./NewsItem";

import "../styles/Home.css";
import SideWidget from "./SideWidget";
import SideSpace from "./SideSpace";
import WidgetSlideshow from "./slideShow/WidgetSlideshow";

class Home extends Component {
  render() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div className="home">
        <SlideEffect className="slideEffect" />
        <section className="info">
          <SideSpace />
          <div className="news">
            {" "}
            <NewsItem
              title="Dia-avond"
              text='<p 
                      style=" padding-left: 10px;
                              padding-right: 20px;
                              padding-bottom: 20px;
                              padding-top: 20px;
                              font-size: 1.17em;
                              ">
                              
                    Reserveer uw plaats op <a href="/#/diaavond">deze</a> pagina.'
              imageUrl="https://kramaaiblog.files.wordpress.com/2020/08/leidersvoorstelling-en-dia-avond.jpg"
            />
            <NewsItem
              title="Vakesweekend 2020"
              text='<p 
                      style=" padding-left: 10px;
                              padding-right: 20px;
                              padding-bottom: 20px;
                              padding-top: 20px;
                              font-size: 1.17em;
                              ">
                              
                    Dag papa&rsquo;s en mannelijke vrijwilligers,
                    <br /><br />
                    Hopelijk staat het weekend van 16-18 oktober al aangeduid in jullie agenda want dan gaan wij op vakesweekend! 
                    We weten dat het in deze tijden geen garantie is dat dit weekend zal mogen doorgaan maar we hopen op voldoende versoepelde maatregelen. 
                    Indien we dit alsnog moeten uitstellen worden jullie volledig terugbetaald.
                    <br /><br />
                    Voor je offici&euml;le inschrijving en voor meer info: <a href="mailto:vakesweekend@kramaai.be">vakesweekend@kramaai.be</a>
                    </p>'
              imageUrl="https://kramaaiblog.files.wordpress.com/2020/06/vakesweekend.jpg"
            />
            <NewsItem
              title="Santé op onze jubilé: 45 jarig bestaan Scouts Mollem"
              text=" "
              imageUrl="https://kramaaiblog.files.wordpress.com/2020/01/jubilee40jaarscouts.jpg"
            />
            <h2>
              <center><a href="http://jubile.kramaai.be" target="_blank" rel="noopener noreferrer">Meer info op jubile.kramaai.be</a></center>
            </h2>
            <br />
          </div>

          <div className="calender">
            <h2 className="titleCalendar">Kalender</h2>
            <CalendarItem date="5 sep" event="Dia-avond" />
            <CalendarItem date="20 sep" event="Eerste vergadering scoutsjaar 2020-2021" />
            <CalendarItem date="11 okt" event="Geen vergadering" />
            <br />
            <WidgetSlideshow />
            <SideWidget />
          </div>
          <SideSpace />
        </section>
      </div>
    );
  }
}

export default Home;
