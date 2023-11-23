import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import ReactGA from "react-ga";

import Home from "./components/Home.js";
import Inschrijven from "./components/Inschrijven.js";
import Leiding from "./components/Leiding.js";
import Navbar from "./components/navigation/Navbar";
import Navlinks from "./components/navigation/Navlinks";
import Photos from "./components/Photos";
import Album from "./components/Album";
import Kramaai from "./components/Kramaai";
import Faq from "./components/Faq.js";

import "./App.css";
import Verhuur from "./components/Verhuur.js";
import Takken from "./components/Takken.js";
import Kapoenen from "./components/takken/Kapoenen.js";
import Welpen from "./components/takken/Welpen.js";
import Bevers from "./components/takken/Bevers.js";
import JongGivers from "./components/takken/JongGivers";
import Givers from "./components/takken/Givers.js";
import Jins from "./components/takken/Jins.js";
import Groepsleiding from "./components/takken/Groepsleiding.js";
import DiaAvond from "./components/DiaAvond.js";
import Pancakes from "./components/Pancakes.js";

function App() {
    ReactGA.initialize("UA-147726960-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <HashRouter basename="">
            <header>
                <Navbar />
            </header>

            <Switch>
                <Route path="/" component={Home} exact />
                {/*<Route path="/inschrijven" component={Inschrijven} exact />*/}
                <Route path="/leiding" component={Leiding} exact />
                <Route path="/fotos" component={Photos} exact />
                <Route path="/fotos/:id" component={Album} />
                <Route path="/kramaai" component={Kramaai} />
                <Route path="/Takken" component={Takken} />
                <Route path="/faq" component={Faq} />
                <Route path="/verhuur" component={Verhuur} />
                <Route path="/kapoenen" component={Kapoenen} />
                <Route path="/welpen" component={Welpen} />
                <Route path="/bevers" component={Bevers} />
                <Route path="/jongGivers" component={JongGivers} />
                <Route path="/givers" component={Givers} />
                <Route path="/jins" component={Jins} />
                <Route path="/groepsleiding" component={Groepsleiding} />
                <Route path="/diaavond" component={DiaAvond} />
                <Route path="/pannenkoeken" component={Pancakes} />
                {/* <Route path="/wijn" component={Wijn} /> */}
                {/* <Route path="/etentje" component={Etentje} /> */}
                {/* Dit is voor een pad dat niet bestaat. Hier kan een speciale Error component voor gemaakt worden */}
                <Route component={Home} exact />
            </Switch>
            <footer>
                <div className="data">
                    <Navlinks />
                    <p>
                        Hosting door{" "}
                        <a target="_blank" rel="noopener noreferrer" href="https://www.scoutnet.be">
                            Scoutnet
                        </a>
                    </p>
                    <p>
                        © Website gemaakt door{" "}
                        <a target="_blank" rel="noopener noreferrer" href="https://www.backeit.be">
                            Tom De Backer
                        </a>
                    </p>
                </div>
            </footer>
        </HashRouter>
    );
}

export default App;
