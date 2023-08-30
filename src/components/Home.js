import React, { Component } from "react";

import ReactGA from "react-ga";

import SlideEffect from "../components/slideShow/slideEffect";
import CalendarItem from "./CalendarItem";
import NewsItem from "./NewsItem";

import "../styles/Home.css";
import SideWidget from "./SideWidget";
import SideSpace from "./SideSpace";
import WidgetSlideshow from "./slideShow/WidgetSlideshow";

let calendarPromise = new Promise((resolve) => {
    fetch("https://kramaai.be/public/calendar.json").then((calendar) =>
        resolve(calendar.json())
    );
});
let newsPromise = new Promise((resolve) => {
    fetch("https://kramaai.be/public/news.json").then((news) =>
        resolve(news.json())
    );
});

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            calendarItems: undefined,
            newsItems: undefined,
        };
        this.getCalendarItems = this.getCalendarItems.bind(this);
        this.getCalendarItems();
        this.getNewsItems = this.getNewsItems.bind(this);
        this.getNewsItems();
    }

    getCalendarItems() {
        calendarPromise.then((items) => {
            this.setState((state) => (state.calendarItems = items));
        });
    }

    getNewsItems() {
        newsPromise.then((items) => {
            this.setState((state) => (state.newsItems = items));
        });
    }

    render() {
        ReactGA.pageview(window.location.pathname + window.location.search);
        return (
            <div className="home">
                <SlideEffect className="slideEffect" />
                <section className="info">
                    <SideSpace />
                    <div className="news">
                        {(this.state.newsItems &&
                            ((this.state.newsItems.lenght == 0 && (
                                <p>
                                    Er is momenteel geen nieuws, kom later nog
                                    eens terug.
                                </p>
                            )) ||
                                this.state.newsItems.map((item) => (
                                    <NewsItem
                                        key={item.title}
                                        title={item.title}
                                        text={item.text}
                                        imageUrl={item.imageURL}
                                        imageLink={item.imageLink}
                                        until={Date.parse(item.until)}
                                    />
                                )))) || <p>laden...</p>}
                    </div>

                    <div className="calender">
                        <h2 className="titleCalendar">Kalender</h2>
                        {(this.state.calendarItems &&
                            ((this.state.calendarItems.length == 0 && (
                                <p>
                                    Er is momenteel niets gepland, kom later nog
                                    eens terug.
                                </p>
                            )) ||
                                this.state.calendarItems.map((item) => (
                                    <CalendarItem
                                        key={item.event}
                                        date={item.date}
                                        event={item.event}
                                        until={new Date(item.until)}
                                    />
                                )))) || <p>laden...</p>}
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
