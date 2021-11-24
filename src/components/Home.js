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

            {/* <NewsItem
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
            /> */}

            <NewsItem
              title="Italiaans Etentje 2021"
              text='<p 
              style=" padding-left: 10px;
                      padding-right: 20px;
                      padding-bottom: 20px;
                      padding-top: 20px;
                      font-size: 1.17em;
                      ">
                      </p>'
              imageUrl="https://kramaaiblog.files.wordpress.com/2021/10/italiaans-etentje-2021_compressed-1.jpg"
            />

            <NewsItem
              title="Scoutsjaar 2021-2022 "
              text='<p 
              style=" padding-left: 10px;
                      padding-right: 20px;
                      padding-bottom: 20px;
                      padding-top: 20px;
                      font-size: 1.17em;
                      ">
                      </p>'
              imageUrl="https://kramaaiblog.files.wordpress.com/2021/08/diaavond2021.jpg"
            />
            
            {/* <NewsItem
              title="Italiaans etentje 2020 (AFGELAST)"
              text='<p 
              style=" padding-left: 10px;
                      padding-right: 20px;
                      padding-bottom: 20px;
                      padding-top: 20px;
                      font-size: 1.17em;
                      ">
                      Beste ouders en leden, 
                      <br /><br />
                      We hebben besloten om ons Italiaans etentje te annuleren. Gezien de huidige situatie vinden we het niet meer verantwoord om op dit moment een evenement te organiseren. Maar uitstel is geen afstel. 
                      Zorg goed voor jezelf en voor elkaar!<br /><br />
                      Een stevige linkerelleboog<br />
                      Leiding en kookploeg van Scouts Kramaai Mollem
                      </p>'
              imageUrl=" "
            />

            <NewsItem
              title="Santé op onze jubilé: 45 jarig bestaan Scouts Mollem (Uitgesteld)"
              text=" "
              imageUrl="https://kramaaiblog.files.wordpress.com/2020/01/jubilee40jaarscouts.jpg"
            />
            <h2>
              <center><a href="http://jubile.kramaai.be" target="_blank" rel="noopener noreferrer">Meer info op jubile.kramaai.be</a></center>
            </h2>
            <br /> */}

          </div>

          <div className="calender">
            <h2 className="titleCalendar">Kalender</h2>
            <CalendarItem date="6 - 7 nov" event="Italiaans etentje" />
            <CalendarItem date="19-20-21 nov" event="Giverweekend" />
            <CalendarItem date="24 dec" event="Jeneveravond" />
            <CalendarItem date="3 - 13 aug 2022" event="Scoutskamp" />
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
