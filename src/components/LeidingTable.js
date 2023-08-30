import React from "react";

import "../styles/Leiding.css";
import leiding from "./Leiding_object.js";

const LeidingTable = () => {
    function getLeiding(leidingArray, number = false) {
        return (
            <tbody>
                {leidingArray.map((leiding, index) => {
                    let first = index == 0 && !number;
                    return (
                        <tr>
                            <td>
                                {(first && <b>{leiding.name}</b>) ||
                                    leiding.name}
                            </td>
                            <td>
                                {(first && <b>{leiding.totem}</b>) ||
                                    leiding.totem}
                            </td>
                            <td>
                                {(first && <b>{leiding.email}</b>) ||
                                    leiding.email}
                            </td>
                            {number && <td>{leiding.number}</td>}
                        </tr>
                    );
                })}
            </tbody>
        );
    }

    return (
        <div>
            {/* new Date(2020, 8, 5, 22, 0, 0, 0) = Sat Sep 05 2020 22:00:00 GMT+0200 (Central European Summer Time) */}
            {new Date(2021, 8, 6, 22, 0, 0, 0) < new Date() && (
                <div>
                    <br />
                    <div className="titleTable" id="kapoenen">
                        <div>Kapoenen</div>
                        <a
                            className="emailTable"
                            href="mailto:kapoenen@kramaai.be"
                        >
                            Kapoenen@kramaai.be
                        </a>
                    </div>
                    <table className="table">
                        {getLeiding(leiding.kapoenen)}
                    </table>
                    <br />
                    <br />
                    <div className="titleTable" id="welpen">
                        <div>Welpen</div>
                        <a
                            className="emailTable"
                            href="mailto:welpen@kramaai.be"
                        >
                            Welpen@kramaai.be
                        </a>
                    </div>
                    <table className="table">
                        {getLeiding(leiding.welpen)}
                    </table>
                    <br />
                    <br />
                    <div className="titleTable" id="bevers">
                        <div>Bevers</div>
                        <a
                            className="emailTable"
                            href="mailto:bevers@kramaai.be"
                        >
                            Bevers@kramaai.be
                        </a>
                    </div>
                    <table className="table">
                        {getLeiding(leiding.bevers)}
                    </table>
                    <br />
                    <br />
                    <div className="titleTable" id="jonggivers">
                        <div>Jong-Givers</div>
                        <a
                            className="emailTable"
                            href="mailto:jonggivers@kramaai.be"
                        >
                            Jonggivers@kramaai.be
                        </a>
                    </div>
                    <table className="table">
                        {getLeiding(leiding.jonggivers)}
                    </table>
                    <br />
                    <br />
                    <div className="titleTable" id="givers">
                        <div>Givers</div>
                        <a
                            className="emailTable"
                            href="mailto:givers@kramaai.be"
                        >
                            Givers@kramaai.be
                        </a>
                    </div>
                    <table className="table">
                        {getLeiding(leiding.givers)}
                    </table>
                    <br />
                    <br />
                    <div className="titleTable" id="jins">
                        <div>Jins</div>
                        <a className="emailTable" href="mailto:jins@kramaai.be">
                            Jins@kramaai.be
                        </a>
                    </div>
                    <table className="table">{getLeiding(leiding.jins)}</table>
                    <br />
                    <br />
                    <div className="titleTable" id="groupsleiding">
                        <div>Groepsleiding</div>
                        <a
                            className="emailTable"
                            href="mailto:groepsleiding@kramaai.be"
                        >
                            Groepsleiding@kramaai.be
                        </a>
                    </div>
                    <table className="table">
                        {getLeiding(leiding.groep, true)}
                    </table>
                </div>
            )}
        </div>
    );
};

export default LeidingTable;
