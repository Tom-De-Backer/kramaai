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
              title="Leidersvoorstelling 2019"
              text=" "
              imageUrl="https://kramaaiblog.files.wordpress.com/2019/09/diavoorstelling2019.jpg"
            />
            <NewsItem
              title="Leidersvoorstelling"
              text=" "
              imageUrl="https://kramaaiblog.files.wordpress.com/2019/09/img_3425.jpg?w=676"
            />
          </div>

          <div className="calender">
            <h2 className="titleCalendar">Kalender</h2>
            <CalendarItem
              date="17 sep"
              event="Leidersvoorstelling @ GBS Mollem"
            />
            <CalendarItem date="22 sep" event="Eerste vergadering" />
            <CalendarItem date="6 okt" event="Ouderavond" />
            <CalendarItem
              date="20 okt"
              event="Geen vergadering (leidersweekend)"
            />
            <CalendarItem date="9 nov" event="Italiaans etentje" />
            <SideWidget />
          </div>
          <SideSpace />
        </section>
      </div>
    );
  }
}

export default Home;
