import React, { Component } from "react";

import ReactGA from "react-ga";

import SlideEffect from "../components/slideShow/slideEffect";
import CalendarItem from "./CalendarItem";
import NewsItem from "./NewsItem";

import "../styles/Home.css";
import SideWidget from "./SideWidget";
import WidgetSlideshow from "./slideShow/WidgetSlideshow";
import calendarImage from "../images/calendar.png";

/**
 * This can be used to test the `news.json` and `calendar.json` files, items in those files that have `testing` set to `true` will only appear when you set this on `true`.
 * This allows you to test using these files without impacting what the visitors of the site see.
 *
 */
let testing = false;
let calendarPromise = new Promise((resolve) => {
    fetch("https://kramaai.be/public/calendar.json").then((calendar) => resolve(calendar.json()));
});
let newsPromise = new Promise((resolve) => {
    fetch("https://kramaai.be/public/news.json").then((news) => {
        resolve(news.json());
    });
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
            this.setState(
                (state) =>
                    (state.calendarItems = items.filter(
                        (item) =>
                            (!item.testing || testing) &&
                            (!item.from || Date.parse(item.from) < new Date()) &&
                            (!item.until || Date.parse(item.until.replaceAll("/", "-")) > new Date())
                    ))
            );
        });
    }

    getNewsItems() {
        newsPromise.then((items) => {
            this.setState(
                (state) =>
                    (state.newsItems = items.filter(
                        (item) =>
                            (!item.testing || testing) &&
                            (!item.from || Date.parse(item.from) < new Date()) &&
                            (!item.until || Date.parse(item.until) > new Date())
                    ))
            );
        });
    }

    render() {
        ReactGA.pageview(window.location.pathname + window.location.search);
        return (
            <div className="home">
                <SlideEffect className="slideEffect" />
                <section className="info">
                    <div className="news">
                        {(this.state.newsItems &&
                            ((this.state.newsItems.length == 0 && (
                                <p>Er is momenteel geen nieuws, kom later nog eens terug.</p>
                            )) ||
                                this.state.newsItems.map((item) => (
                                    <NewsItem
                                        key={item.title}
                                        title={item.title}
                                        text={item.text}
                                        imageUrl={item.imageURL}
                                        imageLink={item.imageLink}
                                    />
                                )))) || <p>laden...</p>}
                    </div>

                    <div className="sideSpace">
                        <div className="calender">
                            <h2 className="titleCalendar">
                                Kalender
                                <a href="webcal://www.kramaai.be/public/ScoutsKramaaiMollem.ics">
                                    <img src={calendarImage} alt="iCalendar" id="calendarImg" />
                                </a>
                            </h2>
                            {(this.state.calendarItems &&
                                ((this.state.calendarItems.length === 0 && (
                                    <p>
                                        Er is momenteel niets gepland, kom later nog eens terug.
                                        <br />
                                    </p>
                                )) ||
                                    this.state.calendarItems.map((item) => (
                                        <CalendarItem key={item.event} date={item.date} event={item.event} />
                                    )))) || <p>laden...</p>}
                        </div>
                        <br />
                        <div className="slideShow">
                            <WidgetSlideshow />
                        </div>
                        <SideWidget />
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
