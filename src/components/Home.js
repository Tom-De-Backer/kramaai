import React, { Component } from "react";

import SlideEffect from "../components/slideShow/slideEffect";
import CalendarItem from "./CalendarItem";
import NewsItem from "./NewsItem";

import "../styles/Home.css";
import SideWidget from "./SideWidget";
import SideSpace from "./SideSpace";

class Home extends Component {
  render() {
    return (
      <div>
        <SlideEffect className="slideEffect" />
        <section className="info">
          <SideSpace />
          <div className="news">
            <NewsItem
              title="Leidersvoorstelling"
              text=" "
              imageUrl="https://kramaaiblog.files.wordpress.com/2019/09/img_3425.jpg?w=676"
            />
            <NewsItem
              title="Opening nieuw lokaal"
              text="Eindelijk is het zover. Onze officiële opening van het nieuwe scoutslokaal in Mollem. Dankzij jullie zou het nooit gelukt zijn. Ouders, leiding, leden, oud-leiding, sympathisanten, de gemeente, de architecten… Allemaal hebben ze de afgelopen jaren het beste van zichzelf gegeven om dit te verwezenlijken. Daarom willen we er dan ook een groot feest van maken, en dit dan ook te vieren met iedereen. Hou zaterdag 9 maart dus zeker en vast maar vrij in jullie agenda, want het wordt GEWELDIG!"
              imageUrl="https://kramaaiblog.files.wordpress.com/2019/02/52100085_1374893045991088_3056328753949966336_o.jpg?w=676"
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
