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

            {/* <NewsItem
              title="The White & Grey (K)Night 2022"
              text='<p 
              style=" padding-left: 10px;
                      padding-right: 20px;
                      padding-bottom: 20px;
                      padding-top: 20px;
                      font-size: 1.17em;
                      ">
                      Vrijdag 8 april => The White (K)Night
                      <br />
                      Zaterdag 9 april => The Grey (K)Night
                      </p>'
              imageUrl="https://kramaaiblog.files.wordpress.com/2022/03/twkfoto.jpg"
            /> */}

            {/* <NewsItem
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
            /> */}

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
          {new Date(2022, 10, 7, 0, 0, 0, 0) > new Date() && (
            <NewsItem
            title="Italiaans etentje"
              text=" "
            imageUrl="https://www.kramaai.be/images/italiaans_etentje_2022.jpeg"
            />
          )}
          {new Date(2022, 8, 4, 13, 0, 0, 0) < new Date() && (
            <NewsItem
            title="Kramaai"
              text='<p 
              style=" padding-left: 10px;
                      padding-right: 20px;
                      padding-bottom: 20px;
                      padding-top: 20px;
                      font-size: 1.17em;
                      ">
              Beste ouders en leden,
              <br/><br/>
              Vanaf nu staat ook de kramaai van maart, april en mei op onze website. Je kunt deze <a href="https://kramaaiblog.files.wordpress.com/2023/03/kramaai-2223-maart-april-mei.pdf">hier</a> bekijken.
              <br/>
              <br/>Een stevige linker
              <br/>De Leiding
            <p/>'
            imageUrl=" "
            />
          )}
          {new Date(2022, 8, 4, 13, 0, 0, 0) < new Date() && (
            <NewsItem
            title="Kampfoto's"
              text="<p 
              style=' padding-left: 10px;
                      padding-right: 20px;
                      padding-bottom: 20px;
                      padding-top: 20px;
                      font-size: 1.17em;
                      '>
              Beste ouders en leden,
              <br/><br/>
              Vanaf nu kunnen jullie ook de foto's van het kamp van 2022 bekijken door <a href='https://photos.app.goo.gl/iPpWPCeNvj8Ew8dH6'>hier</a> te klikken.
              <br/>
              <br/>Een stevige linker
              <br/>De Leiding
            <p/>"
            imageUrl=" "
            />
          )}
          </div>

          <div className="calender">
            <h2 className="titleCalendar">Kalender</h2>
            <CalendarItem date="5 - 6 november" event="Italiaans etentje"></CalendarItem>
            <CalendarItem date="24 december" event="Jeneveravond"></CalendarItem>
            {/* <CalendarItem date="27 maa" event="Switchvergadering" />
            <CalendarItem date="8 apr" event="The White (K)Night" />
            <CalendarItem date="9 apr" event="The Grey (K)Night" />
            <CalendarItem date="10 apr" event="Geen vergadering" />
            <CalendarItem date="22 mei" event="Laatste vergadering" />
            <CalendarItem date="3 - 13 aug 2022" event="Scoutskamp" /> */}
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
