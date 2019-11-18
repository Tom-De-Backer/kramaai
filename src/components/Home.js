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
              title="Givers fietsen naar Music For Life voor het Kom Op Tegen Kanker!"
              text=" "
              imageUrl="https://kramaaiblog.files.wordpress.com/2019/11/giversmusicforlife.jpg?"
            />
            <NewsItem
              title="Jeneveravond"
              text=" "
              imageUrl="https://kramaaiblog.files.wordpress.com/2019/11/jeneveravond.jpg"
            />
            <NewsItem
              title="Kerstmarkt Asse"
              text=" "
              imageUrl="https://kramaaiblog.files.wordpress.com/2019/11/kerstmarktasse.jpg"
            />
          </div>

          <div className="calender">
            <h2 className="titleCalendar">Kalender</h2>
            <CalendarItem
              date="1 dec"
              event="Sinterklaas komt naar Scout Mollem"
            />
            <CalendarItem date="21 dec" event="Kerstmarkt @Asse" />
            <CalendarItem
              date="22 dec"
              event="Givers fietsen naar Music For Life + Geen vergadering"
            />{" "}
            <CalendarItem
              date="24 dec"
              event="Jeneveravond @Kerkplein Mollem"
            />
            <CalendarItem date="29 dec" event="Geen Vergadering" />
            <CalendarItem
              date="1 jan"
              event="Gelukkig Nieuwjaar vanwege de voltallige leidingsploeg!"
            />
            <CalendarItem date="4 jan" event="Zwemvergadering " />
            <CalendarItem date="26 jan" event="Schaatsen" />
            <CalendarItem
              date="16 feb"
              event="Geen vergadering (Kampverkenning voor leiding)"
            />
            <SideWidget />
          </div>
          <SideSpace />
        </section>
      </div>
    );
  }
}

export default Home;
