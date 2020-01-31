import React, { Component } from "react";

import ReactGA from "react-ga";

import SlideEffect from "../components/slideShow/slideEffect";
import CalendarItem from "./CalendarItem";
import NewsItem from "./NewsItem";

import "../styles/Home.css";
import SideWidget from "./SideWidget";
import SideSpace from "./SideSpace";

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
              title="Santé op onze jubilé: 45 jarig bestaan Scouts Mollem"
              text=" "
              imageUrl="https://kramaaiblog.files.wordpress.com/2020/01/jubilee40jaarscouts.jpg"
            />
          </div>

          <div className="calender">
            <h2 className="titleCalendar">Kalender</h2>
            <CalendarItem
              date="16 feb"
              event="Geen vergadering (Kampverkenning voor leiding)"
            />
            <CalendarItem date="21 maa" event="KramaaiQuiz" />
            <CalendarItem date="11 apr" event="Santé op onze Jubilé" />
            <CalendarItem
              date="17 mei"
              event="Laatste vergadering van scoutsjaar 2019-2020"
            />
            <CalendarItem date="4 tot 14 augustus" event="Kamp 2019-2020" />
            <SideWidget />
          </div>
          <SideSpace />
        </section>
      </div>
    );
  }
}

export default Home;
