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
      <div>
        <SlideEffect className="slideEffect" />
        <section className="info">
          <SideSpace />
          <div className="news">
            {" "}
            <NewsItem
              title="Kampelijkse Kost: Delivery"
              text=" "
              imageUrl=" https://kramaaiblog.files.wordpress.com/2020/06/kampelijksekost.jpg"
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
            <CalendarItem date="21 maa" event="Kramaaikwis" />
            <CalendarItem date="11 apr" event="Santé op onze Jubilé" />
            <CalendarItem
              date="17 mei"
              event="Laatste vergadering van scoutsjaar 2019-2020"
            />
            <CalendarItem date="4 aug" event="Start kamp 2019-2020" />
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
