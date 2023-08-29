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
		  title="The White, Little & Grey (K)Night 2023"
		  text='<p 
		  style=" padding-left: 10px;
				  padding-right: 20px;
				  padding-bottom: 20px;
				  padding-top: 20px;
				  font-size: 1.17em;
				  ">
				  Vrijdag 7 april => <a href="https://www.facebook.com/TheWhiteKnight1730">The White (K)Night</a>
				  <br />
				  Zaterdag 8 april => <a href="https://www.facebook.com/events/949279902741165/">The Little (K)Night</a>
				  <br />
				  Zaterdag 8 april => <a href="https://www.facebook.com/events/s/the-grey-knight-2023/1263880664485667/">The Grey (K)Night</a>
				  </p>'
		  imageUrl="https://kramaai.be/images/TWK.jpg"
		  imageLink="https://www.facebook.com/TheWhiteKnight1730"
		/> */}
                        {/* new Date(2022, 8, 4, 13, 0, 0, 0) < new Date() && (
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
          )*/}
                        {/* <NewsItem
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
            /> */}
                    </div>

                    <div className="calender">
                        <h2 className="titleCalendar">Kalender</h2>
                        <CalendarItem
                            date="9 September"
                            event="Dia-avond"
                            until={new Date(2023, 8, 10)}
                        />
                        <CalendarItem
                            date="17 September"
                            event="Eerste vergadering"
                            until={new Date(2023, 8, 17, 17)}
                        />
                        <CalendarItem
                            date="4 & 5 November"
                            event="Italiaans etentje"
                            until={new Date(2023, 10, 6)}
                        />
                        <CalendarItem
                            date="24 December"
                            event="Jeneveravond"
                            until={new Date(2023, 11, 24)}
                        />
                        <CalendarItem
                            date="5 & 6 April"
                            event="White, Little & Grey (K)night"
                            until={new Date(2024, 3, 7)}
                        />
                        <CalendarItem
                            date="3-13 Augustus"
                            event="Kamp"
                            until={new Date(2024, 7, 14)}
                        />
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
