import React from "react";

import "../styles/Leiding.css";

const LeidingTable = () => {
  console.log(new Date());
  console.log(new Date(2020, 8, 5, 22, 0, 0, 0));
  console.log(new Date(2020, 8, 5, 22, 0, 0, 0) < new Date());
  return (
    <div>
      {/* new Date(2020, 8, 5, 22, 0, 0, 0) = Sat Sep 05 2020 22:00:00 GMT+0200 (Central European Summer Time) */}
      {new Date(2021, 8, 6, 22, 0, 0, 0) < new Date() && (
        <div>
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
                <td><b>Hanne Esselens</b></td>
                <td><b>Ijverige Otter</b></td>
                <td><b>Hanne@kramaai.be</b></td>
              </tr>
              <tr>
                <td>Flore Esselens</td>
                <td>Goedlachse Springbok</td>
                <td>Flore@kramaai.be</td>
              </tr>
              <tr>
                <td>Catherine Heyvaert</td>
                <td>Goedlachs Konijn</td>
                <td>Catherine@kramaai.be</td>
              </tr>
              <tr>
                <td>Andreas Verhoeven</td>
                <td>Oprechte Newfoundlander</td>
                <td>Andreas@kramaai.be</td>
              </tr>
              <tr>
                <td>Merlijn Devroede</td>
                <td>Eigenaardig Penseelaapje</td>
                <td>Merlijn@kramaai.be</td>
              </tr>
              <tr>
                <td>Senne Lauwers</td>
                <td>Schalkse Brulaap</td>
                <td>Senne@kramaai.be</td>
              </tr>
              <tr>
                <td>Roxanne Hoornaert</td>
                <td>Unieke Fazant</td>
                <td>Roxanne@kramaai.be</td>
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
                <td><b>Lennart Beeckman</b></td>
                <td><b>Toegewijde Steltral</b></td>
                <td><b>Lennart@kramaai.be</b></td>
              </tr>
              <tr>
                <td>Delphine Ilsbroux</td>
                <td>Uitbundige Bezoar</td>
                <td>Delphine@kramaai.be</td>
              </tr>
              <tr>
                <td>Tijs De Jonge</td>
                <td></td>
                <td>Tijs@kramaai.be</td>
              </tr>
              <tr>
                <td> Frederic Van Praet </td>
                <td> Genereuze Haan </td>
                <td> Frederic@kramaai.be </td>
              </tr>
              <tr>
                <td>Jari Heyvaert</td>
                <td></td>
                <td>Jari@kramaai.be</td>
              </tr>
              <tr>
                <td>Kobe Gysens</td>
                <td>Ondeugende Ekster</td>
                <td>Kobe@kramaai.be</td>
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
                <td><b>Fien De Jonge</b></td>
                <td><b>Vlotte Wasbeer</b></td>
                <td><b>FienDeJonge@kramaai.be</b></td>
              </tr>
              <tr>
                <td>Jules Eeman</td>
                <td>Nonchalante Lepelaar</td>
                <td>Jules@kramaai.be</td>
              </tr>
              <tr>
                <td>Jasper Beeckman</td>
                <td>Sympathieke Spitsvogel</td>
                <td>Jasper@kramaai.be</td>
              </tr>
              <tr>
                <td>Ferre Luppens</td>
                <td>Ingetogen Kameel</td>
                <td>Ferre@kramaai.be</td>
              </tr>
              <tr>
                <td>Bram Esselens</td>
                <td>Avontuurlijke Stokstaart</td>
                <td>Bram@kramaai.be</td>
              </tr>
              <tr>
                <td>Romain Wouters</td>
                <td>Respectvolle Schaarbek</td>
                <td>Romain@kramaai.be</td>
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
                <td><b>Matisse Eeman</b></td>
                <td><b>Dromerige Spreeuw</b></td>
                <td><b>Matisse@kramaai.be</b></td>
              </tr>
              <tr>
                <td>Manse Bouckaert</td>
                <td>Onstuimige Streepmuis</td>
                <td>Manse@kramaai.be</td>
              </tr>
              <tr>
                <td> Inne Van Lil</td>
                <td> Enthousiaste Toekan</td>
                <td> Inne@kramaai.be</td>
              </tr>
              <tr>
                <td> Gilles Van Den Cruyce</td>
                <td> Artistieke Sifaka</td>
                <td> Gilles@kramaai.be</td>
              </tr>
              <tr>
                <td>Kobe Bogaert</td>
                <td>Stoutmoedige Walrus</td>
                <td>KobeBogaert@kramaai.be</td>
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
            <div>Givers</div>
            <a className="emailTable" href="mailto:givers@kramaai.be">
              Givers@kramaai.be
            </a>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <b>Lorraine Wouters</b>
                </td>
                <td>
                  <b>Goedhartig Sikahert</b>
                </td>
                <td>
                  <b>Lorraine@kramaai.be</b>
                </td>
              </tr>
              <tr>
                <td> Daan Capitaine </td>
                <td> Fiere Jan-van-Gent </td>
                <td> Daan@kramaai.be </td>
              </tr>
              <tr>
                <td> Mats Verdoodt </td>
                <td> Verrassende Jabiroe </td>
                <td> Mats@kramaai.be </td>
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
            <div>Jins</div>
            <a className="emailTable" href="mailto:jins@kramaai.be">
              Jins@kramaai.be
            </a>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td><b>Liesa Heyvaert</b></td>
                <td><b>Jolige Tijger</b></td>
                <td><b>Liesa@kramaai.be</b></td>
              </tr>
              <tr>
                <td> Karo Van Lil </td>
                <td> Begane Katoenstaart </td>
                <td> Karo@kramaai.be </td>
              </tr>
              <tr>
                <td>Tom De Backer</td>
                <td>Gezellige Wasbeer</td>
                <td>Tom@kramaai.be</td>
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
                <td>Bram Esselens</td>
                <td>Avontuurlijke Stokstaart</td>
                <td>Bram@kramaai.be</td>
                <td>+32 468 15 25 19</td>
              </tr>
              <tr>
                <td>Kobe Gysens</td>
                <td>Ondeugende Ekster</td>
                <td>Kobe@kramaai.be</td>
                <td>+32 474 67 70 75</td>
              </tr> 
              <tr>
                <td>Jasper Beeckman</td>
                <td>Sympathieke Spitsvogel</td>
                <td>Jasper@kramaai.be</td>
                <td>+32 468 29 27 35</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LeidingTable;
