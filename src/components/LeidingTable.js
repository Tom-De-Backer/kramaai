import React from "react";

import "../styles/Leiding.css";

const LeidingTable = () => {
  console.log(new Date());
  console.log(new Date(2020, 8, 5, 22, 0, 0, 0));
  console.log(new Date(2020, 8, 5, 22, 0, 0, 0) < new Date());
  return (
    <div>
      {new Date(2020, 8, 5, 22, 0, 0, 0) < new Date() && (
        <div>
          {/* <p>
            <b>
              De nieuwe leiding wordt aangepast na leidersvoorstelling op 17
              september!!
            </b>
          </p> */}
          <br />
          <div className="titleTable">
            <div>Kapoenen</div>
            <a className="emailTable" href="mailto:kapoenen@kramaai.be">
              kapoenen@kramaai.be
            </a>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <b>Karo Van Lil</b>
                </td>
                <td>
                  <b>Begane Katoenstaart</b>
                </td>
                <td>
                  <b>Karo@kramaai.be</b>
                </td>
              </tr>
              <tr>
                <td>Tom De Backer</td>
                <td>Gezellige Wasbeer</td>
                <td>Tom@kramaai.be</td>
              </tr>
              <tr>
                <td>Inne Van Lil</td>
                <td>Enthousiaste Toekan</td>
                <td>Inne@kramaai.be</td>
              </tr>
              <tr>
                <td>Lorraine Wouters</td>
                <td>Goedhartig Sikahert</td>
                <td>Lorraine@kramaai.be</td>
              </tr>
              <tr>
                <td>Matisse Eeman</td>
                <td>Dromerige Spreeuw</td>
                <td>Matisse@kramaai.be</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <div className="titleTable">
            <div>Welpen</div>
            <a className="emailTable" href="mailto:welpen@kramaai.be">
              welpen@kramaai.be
            </a>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <b>Joke Clynhens</b>
                </td>
                <td>
                  <b>Vlotte Hinde</b>
                </td>
                <td>
                  <b>JokeClynhens@kramaai.be</b>
                </td>
              </tr>
              <tr>
                <td>Chloe Fransman</td>
                <td>Begane Kwikstaart</td>
                <td>Chloe@kramaai.be</td>
              </tr>
              <tr>
                <td>Joke Van Houcke</td>
                <td>Leutige Coendu</td>
                <td>JokeVanHoucke@kramaai.be</td>
              </tr>
              <tr>
                <td>Mats Verdoodt</td>
                <td>Verrassende Jabiroe</td>
                <td>Mats@kramaai.be</td>
              </tr>
              <tr>
                <td>Gilles Van Den Cruyce</td>
                <td>Artistieke Sifaka</td>
                <td>Gilles@kramaai.be</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <div className="titleTable">
            <div>Bevers</div>
            <a className="emailTable" href="mailto:bevers@kramaai.be">
              bevers@kramaai.be
            </a>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <b>Frederic Van Praet</b>
                </td>
                <td>
                  <b>Genereuze Haan</b>
                </td>
                <td>
                  <b>Frederic@kramaai.be</b>
                </td>
              </tr>
              <tr>
                <td>Anse Beeckman</td>
                <td>Speelse Slechtvalk</td>
                <td>Anse@kramaai.be</td>
              </tr>
              <tr>
                <td>Bram Esselens</td>
                <td>Avontuurlijke Stokstaart</td>
                <td>Bram@kramaai.be</td>
              </tr>
              <tr>
                <td>Manse Bouckaert</td>
                <td>Onstuimige Streepmuis</td>
                <td>Manse@kramaai.be</td>
              </tr>
              <tr>
                <td>David De Knop</td>
                <td>Ijverige Alpaca</td>
                <td>David@kramaai.be</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <div className="titleTable">
            <div>Jong-Givers</div>
            <a className="emailTable" href="mailto:jonggivers@kramaai.be">
              jonggivers@kramaai.be
            </a>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <b>Liesa Heyvaert</b>
                </td>
                <td>
                  <b>Jolige Tijger</b>
                </td>
                <td>
                  <b>Liesa@kramaai.be</b>
                </td>
              </tr>
              <tr>
                <td>Daan Capitaine</td>
                <td>Fiere Jan-van-Gent</td>
                <td>Daan@kramaai.be</td>
              </tr>
              <tr>
                <td>Hanne Esselens</td>
                <td>Ijverige Otter</td>
                <td>Hanne@kramaai.be</td>
              </tr>
              <tr>
                <td>Arthur Van der Smissen</td>
                <td>Onverschrokken Lori</td>
                <td>Arthur@kramaai.be</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <div className="titleTable">
            <div>Givers</div>
            <a className="emailTable" href="mailto:givers@kramaai.be">
              givers@kramaai.be
            </a>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <b>Amber Lauwers</b>
                </td>
                <td>
                  <b>Vrijmoedige Palmtortel</b>
                </td>
                <td>
                  <b>Amber@kramaai.be</b>
                </td>
              </tr>
              <tr>
                <td>Anke Van Mulders</td>
                <td>Joviale Merlin</td>
                <td>Anke@kramaai.be</td>
              </tr>
              <tr>
                <td>Lennart Beeckman</td>
                <td>Toegewijde Steltral</td>
                <td>Lennart@kramaai.be</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <div className="titleTable">
            <div>Jins</div>
            <a className="emailTable" href="mailto:jins@kramaai.be">
              jins@kramaai.be
            </a>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <b>Hannah Van Rampelbergh</b>
                </td>
                <td>
                  <b>Zorgzaam Winterkoninkje</b>
                </td>
                <td>
                  <b>Hannah@kramaai.be</b>
                </td>
              </tr>
              <tr>
                <td>Thomas Vitry</td>
                <td>Merkwaardige Cholo</td>
                <td>Thomas@kramaai.be</td>
              </tr>
              <tr>
                <td>Sander Bettens</td>
                <td>Standvastige Bergduivel</td>
                <td>Sander@kramaai.be</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <div className="titleTable">Groepsleiding</div>
          <table className="table">
            <tbody>
              <tr>
                <td>Lennart Beeckman</td>
                <td>Toegewijde Steltral</td>
                <td>Lennart@kramaai.be</td>
                <td>+32 479 18 51 30</td>
              </tr>
              <tr>
                <td>Anse Beeckman</td>
                <td>Speelse Slechtvalk</td>
                <td>Anse@kramaai.be</td>
                <td>+32 471 54 33 85</td>
              </tr>
              <tr>
                <td>Bram Esselens</td>
                <td>Avontuurlijke Stokstaart</td>
                <td>Bram@kramaai.be</td>
                <td>+32 468 15 25 19</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* new Date(2020, 8, 5, 22, 0, 0, 0) = Sat Sep 05 2020 22:00:00 GMT+0200 (Central European Summer Time) */}
      {new Date(2020, 8, 5, 22, 0, 0, 0) > new Date() && (
        <div>
          <p>
            <b>
              De nieuwe leiding voor 2020-2021 wordt aangepast na leidersvoorstelling op 5
              september!!
            </b>
          </p>
          <br />
          <div className="titleTable">
            <div>Kapoenen</div>
            <a className="emailTable" href="mailto:kapoenen@kramaai.be">
              Kapoenen@kramaai.be
            </a>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <b>Lise Michiels</b>
                </td>
                <td>
                  <b>Opmerkelijke mus</b>
                </td>
                <td>
                  <b>Lise@kramaai.be</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Anke Van Mulders</b>
                </td>
                <td>
                  <b>Joviale Merlin</b>
                </td>
                <td>
                  <b>Anke@kramaai.be</b>
                </td>
              </tr>
              <tr>
                <td>Amber Lauwers</td>
                <td>Vrijmoedige Palmtortel</td>
                <td>Amber@kramaai.be</td>
              </tr>
              <tr>
                <td>Liesa Heyvaert</td>
                <td>Jolige Tijger</td>
                <td>Liesa@kramaai.be</td>
              </tr>
              <tr>
                <td>Thomas Vitry</td>
                <td>Merkwaardige Cholo</td>
                <td>Thomas@kramaai.be</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <div className="titleTable">
            <div>Welpen</div>
            <a className="emailTable" href="mailto:welpen@kramaai.be">
              Welpen@kramaai.be
            </a>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <b>Sander Bettens</b>
                </td>
                <td>
                  <b>Standvastige Bergduivel</b>
                </td>
                <td>
                  <b>Sander@kramaai.be</b>
                </td>
              </tr>
              <tr>
                <td>Tom De Backer</td>
                <td>Gezellige Wasbeer</td>
                <td>Tom@kramaai.be</td>
              </tr>
              <tr>
                <td>Joke Clynhens</td>
                <td>Vlotte Hinde</td>
                <td>JokeClynhens@kramaai.be</td>
              </tr>
              <tr>
                <td>Bram Esselens</td>
                <td>Avontuurlijke stokstaart</td>
                <td>Bram@kramaai.be</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <div className="titleTable">
            <div>Bevers</div>
            <a className="emailTable" href="mailto:bevers@kramaai.be">
              Bevers@kramaai.be
            </a>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <b>Karo Van Lil</b>
                </td>
                <td>
                  <b>Begane Katoenstaart</b>
                </td>
                <td>
                  <b>Karo@kramaai.be</b>
                </td>
              </tr>
              <tr>
                <td>Anse Beeckman</td>
                <td>Speelse Slechtvalk</td>
                <td>Anse@kramaai.be</td>
              </tr>
              <tr>
                <td>Chloe Fransman</td>
                <td>Begane Kwikstaart</td>
                <td>Chloe@kramaai.be</td>
              </tr>
              <tr>
                <td>Joke Van Houcke</td>
                <td>Leutige Coendou</td>
                <td>JokeVanHoucke@kramaai.be</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <div className="titleTable">
            <div>Jong-Givers</div>
            <a className="emailTable" href="mailto:jonggivers@kramaai.be">
              Jonggivers@kramaai.be
            </a>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <b>Hanne Esselens</b>
                </td>
                <td>
                  <b>Ijverige Otter</b>
                </td>
                <td>
                  <b>Hanne@kramaai.be</b>
                </td>
              </tr>
              <tr>
                <td>Daan Capitaine</td>
                <td>Fiere Jan-van-Gent</td>
                <td>Daan@kramaai.be</td>
              </tr>
              <tr>
                <td>Seppe Van Rampelbergh</td>
                <td>Zachtmoedige Bergbever</td>
                <td>Seppe@kramaai.be</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <div className="titleTable">
            <div>Givers</div>
            <a className="emailTable" href="mailto:givers@kramaai.be">
              Givers@kramaai.be
            </a>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <b>Hannah Van Rampelbergh</b>
                </td>
                <td>
                  <b>Zorgzaam Winterkoninkje</b>
                </td>
                <td>
                  <b>Hannah@kramaai.be</b>
                </td>
              </tr>
              <tr>
                <td>Lennart Beeckman</td>
                <td>Toegewijde Steltral</td>
                <td>Lennart@kramaai.be</td>
              </tr>
              <tr>
                <td>Viktor van den Houte</td>
                <td>Impulsieve Kuifmees</td>
                <td>Viktor@kramaai.be</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <div className="titleTable">
            <div>Jins</div>
            <a className="emailTable" href="mailto:jins@kramaai.be">
              Jins@kramaai.be
            </a>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <b>Dries Verdoodt</b>
                </td>
                <td>
                  <b>Bourgondische Saterhoen</b>
                </td>
                <td>
                  <b>Dries@kramaai.be</b>
                </td>
              </tr>
              <tr>
                <td>Joris Van Houcke</td>
                <td>Trotse Saki</td>
                <td>Joris@kramaai.be</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <div className="titleTable">
            <div>Groepsleiding</div>
            <a className="emailTable" href="mailto:groepsleiding@kramaai.be">
              Groepsleiding@kramaai.be
            </a>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td>Thomas Vitry</td>
                <td>Merkwaardige Cholo</td>
                <td>Thomas@kramaai.be</td>
                <td>+32 479 38 18 08</td>
              </tr>
              <tr>
                <td>Lennart Beeckman</td>
                <td>Toegewijde Steltral</td>
                <td>Lennart@kramaai.be</td>
                <td>+32 479 18 51 30</td>
              </tr>
              <tr>
                <td>Anse Beeckman</td>
                <td>Speelse Slechtvalk</td>
                <td>Anse@kramaai.be</td>
                <td>+32 471 54 33 85</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LeidingTable;
